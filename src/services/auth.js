import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateEmail,
  updatePassword,
  updateProfile,
  deleteUser,
} from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { auth } from 'src/boot/firebase';
import { db } from 'src/boot/firebase';

const DEFAULT_PHOTO_URL =
  'https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=';

//로그인 (구글)
export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  const { user } = await signInWithPopup(auth, provider);

  return user;
}

//로그아웃
export async function logout() {
  await signOut(auth);
}

//회원가입
export async function signUpWithEmail({ email, password }) {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);

  await updateProfile(user, {
    //기본값은 이메일 계정의 @ 앞의 값
    displayName: email.split('@')[0],
    photoURL: generateDefaultPhotoURL(user.uid),
  });

  sendVerificationEmail();
}

export function generateDefaultPhotoURL(uid) {
  return `${DEFAULT_PHOTO_URL}${uid}`;
}

export async function signInWithEmail({ email, password }) {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
}

export async function sendPasswordReset(email) {
  await sendPasswordResetEmail(auth, email);
}

export async function updateUserPassword(newPassword) {
  await updatePassword(auth.currentUser, newPassword);
}

export async function sendVerificationEmail() {
  await sendEmailVerification(auth.currentUser);
}

export async function updateUserProfile(displayName) {
  await updateProfile(auth.currentUser, { displayName: displayName });

  await updateDoc(doc(db, 'users', auth.currentUser.uid), {
    displayName,
  });
}

export async function updateUserEmail(email) {
  await updateEmail(auth.currentUser, email);

  await updateDoc(doc(db, 'users', auth.currentUser.uid), {
    email,
  });
}

//회원탈퇴
export async function removeUserInfo() {
  try {
    const user = auth.currentUser;
    await user.delete();
    console.log('탈퇴 성공');
  } catch (error) {
    console.error(error);
  }
}
