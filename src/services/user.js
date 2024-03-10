import { doc, getDoc } from 'firebase/firestore';
import { db } from 'src/boot/firebase';

/**
 * 게시글, 댓글 작성자 표시
 * @param {} id
 * @returns
 */
export async function getUserById(id) {
  const docSnap = await getDoc(doc(db, 'users', id));
  if (docSnap.exists()) {
    const data = docSnap.data();

    console.log(data);

    return {
      id,
      ...data,
      createdAt: data.createdAt.toDate(),
    };
  }

  return null;
}
