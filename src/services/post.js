import { db } from 'boot/firebase';
import {
  addDoc,
  setDoc,
  collection,
  doc,
  serverTimestamp,
  getDocs,
  query,
  updateDoc,
  where,
  orderBy,
  getDoc,
  deleteDoc,
  startAt,
  startAfter,
  endAt,
  limit,
  increment,
} from 'firebase/firestore';
import { getUserById } from './user';

export async function createPost(data) {
  //컬렉션 레퍼런스(참조) - 컬렉션 위치를 가르켜주는 것
  //단순히 위치만 알려주는 것! 네트워크 작업이 이뤄지지 않음
  //   addDoc은 자동으로 ID값 생성
  const docRef = await addDoc(collection(db, 'posts'), {
    ...data, //전개구문으로 데이터안에 있는 필드를 뿌려주고
    readCount: 0,
    likeCount: 0,
    commentCount: 0,
    bookmarkCount: 0,
    createdAt: serverTimestamp(),
  });

  //식별자를 리턴
  return docRef.id;

  //setDoc은 리턴값이 없음
  //db안에 세번째 파라미터로 ID값을 지정할 수 있다. - 넣지않다면 자동으로 생성된다.
  //문서가 없으면 생성하고 있으면 덮어쓴다.
  //수정가능하게 만들려면 세번째 파라미터로 merge: true
  //   await setDoc(
  //     doc(db, 'posts', 'post-id'),
  //     {
  //       // ...data, //전개구문으로 데이터안에 있는 필드를 뿌려주고
  //       // readCount: 0,
  //       // likieCount: 0,
  //       // commentCount: 0,
  //       // bookmarkCount: 0,
  //       // createdAt: serverTimestamp(),
  //       title: 'hello World',
  //     },
  //     {
  //       merge: true,
  //     },
  //   );
}

export async function getPosts(params) {
  //1. 컬렉션에 있는 모든 문서 조회
  //getDocs 모든 데이터정보를 가져온다.
  // const querySnapshot = await getDocs(collection(db, 'posts'));
  // const posts = [];
  // querySnapshot.forEach(docs => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(docs.id, ' => ', docs.data());
  //   posts.push(docs.data());
  // });

  //docs => 모든 도큐먼트들의 배열
  //간단한 코드
  // const posts = querySnapshot.docs.map(docs => {
  //   const data = docs.data();
  //   return {
  //     ...data,
  //     id: docs.id,
  //     createdAt: data.createdAt?.toDate(),
  //   };
  // });
  // console.log(posts);

  //1] 컬렉션에 있는 문서를 쿼리하여 원하는 것들만 조회
  const conditions = [];
  if (params?.category) {
    conditions.push(where('category', '==', params.category));
  }

  if (params?.tags && params?.tags.length > 0) {
    conditions.push(
      // 'array-contaions-any' 는 어레이 안에서 찾을때 사용
      where('tags', 'array-contains-any', params?.tags),
    );
  }

  if (params?.sort) {
    conditions.push(orderBy(params.sort, 'desc'));
  }

  if (params?.start) {
    conditions.push(startAfter(params.start));
  }

  if (params?.limit) {
    conditions.push(limit(params.limit));
  }

  const q = query(collection(db, 'posts'), ...conditions);
  const querySnapshot = await getDocs(q);
  const posts = querySnapshot.docs.map(docs => {
    const data = docs.data();
    return {
      ...data,
      id: docs.id,
      createdAt: data.createdAt?.toDate(),
    };
  });
  //마지막항목 가져오기
  const lastest = querySnapshot.docs[querySnapshot.docs.length - 1];
  // console.log('last :', lastest._document.data.value.mapValue.fields);
  return {
    items: posts,
    lastItem: lastest,
  };
}

export async function getPost(postId) {
  const docSnap = await getDoc(doc(db, 'posts', postId));
  if (!docSnap.exists()) {
    throw new Error('No such Document!');
  }
  const data = docSnap.data();

  console.log(data);
  return {
    id: docSnap.id,
    ...data,
    createdAt: data.createdAt?.toDate(),
  };
}

//조회수
async function incrementReadCount(postId) {
  await updateDoc(doc(db, 'posts', postId), {
    readCount: increment(1),
  });
}

export async function getPostDetails(id) {
  await incrementReadCount(id);
  const post = await getPost(id); //post.uid

  const postUser = await getUserById(post.uid);

  return {
    post,
    postUser,
  };
}

//게시글 수정
export async function updatePost(postId, data) {
  // 첫번쨰 인자는 doc
  // 두번째 인자는 변경될 데이터
  await updateDoc(doc(db, 'posts', postId), {
    ...data,
    updatedAt: serverTimestamp(),
  });
}
//게시글 삭제
export async function deletePost(postId) {
  await deleteDoc(doc(db, 'posts', postId));
}

/**
 * 1] 게시글 좋아요
 * 2] 게시글 좋아요 철회
 * 3] 게시글 좋아요 조회
 */

export async function addLike(uid, postId) {
  await setDoc(doc(db, 'post_likes', `${uid}_${postId}`), {
    uid,
    postId,
    createdAt: serverTimestamp(),
  });
}

export async function removeLike(uid, postId) {
  await deleteDoc(doc(db, 'post_likes', `${uid}_${postId}`));
}

export async function hasLike(uid, postId) {
  const docSnap = await getDoc(doc(db, 'post_likes', `${uid}_${postId}`));
  return docSnap.exists();
}

//북마크 등록
export async function addBookmark(uid, postId) {
  await setDoc(doc(db, 'users', uid, 'bookmark', postId), {
    createdAt: serverTimestamp(),
  });
}

//북마크 삭제
export async function removeBookmark(uid, postId) {
  await deleteDoc(doc(db, 'users', uid, 'bookmark', postId));
}

export async function hasBookmark(uid, postId) {
  const docSnap = await getDoc(doc(db, 'users', uid, 'bookmark', postId));

  return docSnap.exists();
}

export async function getUserBookmark(uid) {
  const q = query(
    collection(db, 'users', uid, 'bookmark'),
    orderBy('createdAt', 'desc'),
    limit(6),
  );
  const querySnapshot = await getDocs(q);

  // 프로미스 객체들 배열로 반환 Promise.all()
  return Promise.all(
    querySnapshot.docs.map(bookmarkDoc => getPost(bookmarkDoc.id)),
  );
}
