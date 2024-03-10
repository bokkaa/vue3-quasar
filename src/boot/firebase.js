import { boot } from 'quasar/wrappers';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useAuthStore } from 'src/stores/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { firebaseConfig } from 'src/firebaseConfig';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

//외부에서도 사용할거임
export { auth, db, storage };

export default boot(async (/* { app, router, ... } */) => {
  const authStore = useAuthStore();

  //유저 상태 변환 감지하여 setUser
  onAuthStateChanged(auth, user => {
    console.log('###user', user);
    authStore.setUser(user);
  });
});
