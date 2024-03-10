// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.

const functions = require('firebase-functions');

// const { logger } = require('firebase-functions');
const {
  onDocumentCreated,
  onDocumentDeleted,
  onDocumentUpdated,
} = require('firebase-functions/v2/firestore');

// The Firebase Admin SDK to access Firestore.
const { initializeApp, cert } = require('firebase-admin/app');
const {
  getFirestore,
  FieldValue,
  Timestamp,
} = require('firebase-admin/firestore');
const serviceAccountKey = require('./serviceAccountKey.json');
const { increment } = require('firebase/firestore');
const { logger } = functions;

const app = initializeApp({
  //자격 증명 설정
  credential: cert(serviceAccountKey),
});
const db = getFirestore(app);
const region = 'asia-northeast3';

//게시물 하나가 등록될떄 이 함수가 실행
//콜백함수에서 event 인자를 받음
//일종의 트리거 함수
//document를 거쳐가는 명령이 있다면 두번째 인자가 자동 실행된다.
exports.onCreateBookmark = onDocumentCreated(
  {
    region,
    document: 'users/{uid}/bookmark/{postId}',
  },
  event => {
    const postId = event.params.postId;
    db.doc(`posts/${postId}`).update({
      bookmarkCount: FieldValue.increment(1),
    });
    // db.collection('posts').doc(postId);
  },
);

exports.onDeleteBookmark = onDocumentDeleted(
  {
    region,
    document: 'users/{uid}/bookmark/{postId}',
  },
  event => {
    const postId = event.params.postId;
    db.doc(`posts/${postId}`).update({
      bookmarkCount: FieldValue.increment(-1),
    });
  },
);

exports.onCreateComment = onDocumentCreated(
  {
    region,
    document: 'posts/{postId}/comments/{commentId}',
  },
  event => {
    const postId = event.params.postId;
    db.doc(`posts/${postId}`).update({
      commentCount: FieldValue.increment(1),
    });
  },
);

exports.onDeleteComment = onDocumentDeleted(
  {
    region,
    document: 'posts/{postId}/comments/{commentId}',
  },
  event => {
    const postId = event.params.postId;
    db.doc(`posts/${postId}`).update({
      commentCount: FieldValue.increment(-1),
    });
  },
);

exports.onCreateLike = onDocumentCreated(
  {
    region,
    document: 'post_likes/{id}',
  },
  event => {
    const snapShot = event.data;
    const data = snapShot.data();
    logger.log('data:', data);
    db.doc(`posts/${data.postId}`).update({
      likeCount: FieldValue.increment(1),
    });
  },
);

exports.onDeleteLike = onDocumentDeleted(
  {
    region,
    document: 'post_likes/{id}',
  },
  event => {
    const snapShot = event.data;
    const data = snapShot.data();
    db.doc(`posts/${data.postId}`).update({
      likeCount: FieldValue.increment(-1),
    });
  },
);
//1세대
//사용자가 회원가입했을때 onCreate함수가 실행
exports.onCreateUser = functions
  .region(region)
  .auth.user()
  .onCreate(user => {
    logger.log(user);
    // users/ svae
    //some() API는 조건식 중 하나라도 참이라면 참을 반환하는 어레이 API
    const isPasswordProvider = user.providerData.some(
      userInfo => userInfo.providerId === 'password',
    );

    const defaultPhotoURL = `https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=${user.uid}`;
    const displayName = isPasswordProvider
      ? user.email.split('@')[0]
      : user.displayName;

    const photoURL = isPasswordProvider ? defaultPhotoURL : user.photoURL;
    //구글 계정으로 회원가입할 때와 이메일로 가입할 때는 분기처리 한다.

    db.doc(`users/${user.uid}`).set({
      email: user.email,
      displayName,
      photoURL,
      createdAt: Timestamp.fromDate(new Date(user.metadata.creationTime)),
    });
  });

exports.onDeleteUser = functions
  .region(region)
  .auth.user()
  .onDelete(user => {
    logger.log(user);
    // users/ remove
    db.doc(`users/${user.uid}`).delete();
  });

// node js를 사용할때는
// 가져올때는 require로 한다.
// 내보낼떄는 exports

//배포과정에서 오류가 발생한경우
//firebase functions:delete <functionName>

exports.onCreatePost = onDocumentCreated(
  {
    region,
    document: 'posts/{postId}',
  },
  event => {
    const data = event.data.data();
    //data.tags

    if (data.tags) {
      updateTags(data.tags);
    }
  },
);

exports.onDeletePost = onDocumentDeleted(
  {
    region,
    document: 'posts/{postId}',
  },
  event => {
    const data = event.data.data();
    if (data.tags) {
      updateTags(data.tags, -1);
    }
  },
);

//업데이트 트리거 때는 무한 루프에 빠질 수 있다.
//무한 루프를 빠져나갈 수 있는 코드를 반드시 작성해야만 한다.
exports.onUpdatePost = onDocumentUpdated(
  {
    region,
    document: 'posts/{postId}',
  },
  event => {
    //변경 전 데이터
    const prevData = event.data.before.data(); //ex prevData.tags => vuejs, react, angular
    //변경 후 데이터
    const data = event.data.after.data(); //ex data.tags => vuejs, react, java, svelte

    //변경 후 교집합으로 나오는 데이터는 카운트를 무시해도 되지만
    //변경 후 추가되는 데이터는 +1, 변경 했을 시 사라지는 데이터는 -1

    //변경 후 사라지는 태그들
    const tagsToRemove = differenceTags(prevData.tags, data.tags);

    //새로 등록될 태그들
    const tagsToAdd = differenceTags(data.tags, prevData.tags);
    logger.log('tagsToRemove :', tagsToRemove);
    logger.log('tagsToAdd :', tagsToAdd);

    if (tagsToRemove) {
      updateTags(tagsToRemove, -1);
    }
    if (tagsToAdd) {
      updateTags(tagsToAdd);
    }
  },
);

function differenceTags(arr1, arr2) {
  //arr1 배열 안에 있는 데이터가 value로 하나씩 넘어온다.
  //즉 arr1 배열 안에 있는 값이 arr2에 담겨져있는지 하나씩 확인
  //같지 않은 경우를 리턴하므로
  //예를들어 arr1 = [1, 2, 3, 4], arr2 = [ 3, 4, 5, 6]이면 반환되는 값은 1, 2이다
  //반대로 arr2를 첫 번째 인자로 넣고 arr1를 두 번째 인자로 넣게되면 반환되는 값은 3,4이다.

  if (!arr1 || !arr2) {
    //만약에 둘 중 하나라도 비어있다면 첫번째 배열을 리턴
    return arr1;
  }
  return arr1.filter(value => arr2.includes(value) === false);
}

function updateTags(tags = [], incrementValue = 1) {
  tags?.forEach(tag => {
    //무조건 소문자로 등록
    db.doc(`tags/${tag.toLowerCase()}`).set(
      { name: tag.toLowerCase(), count: FieldValue.increment(incrementValue) },
      //태그들의 값이 합쳐지도록 merge : true
      { merge: true },
    );
  });
}
