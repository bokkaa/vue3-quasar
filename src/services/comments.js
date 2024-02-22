import { db } from 'src/boot/firebase';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  deleteDoc,
} from 'firebase/firestore';

// 댓글은 하위 컬렉션이라서 postId 다음 인자로 들어간다.
//댓글 추가
export async function addComment(postId, data) {
  const docRef = await addDoc(collection(db, 'posts', postId, 'comments'), {
    ...data,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}

//댓글 불러오기
export async function getComments(postId) {
  const q = query(
    collection(db, 'posts', postId, 'comments'),
    orderBy('createdAt', 'desc'),
  );

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(docu => {
    const data = docu.data();
    return {
      id: docu.id,
      ...data,
      createdAt: data.createdAt.toDate(),
    };
  });
}

//댓글삭제
export async function deleteComment(postId, commentId) {
  await deleteDoc(doc(db, 'posts', postId, 'comments', commentId));
}
