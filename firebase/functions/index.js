// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.

const functions = require('firebase-functions');

// const { logger } = require('firebase-functions');
const {
  onDocumentCreated,
  onDocumentDeleted,
} = require('firebase-functions/v2/firestore');

// The Firebase Admin SDK to access Firestore.
const { initializeApp, cert } = require('firebase-admin/app');
const {
  getFirestore,
  FieldValue,
  Timestamp,
} = require('firebase-admin/firestore');
const serviceAccountKey = require('./serviceAccountKey.json');
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
