import { boot } from 'quasar/wrappers';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useAuthStore } from 'src/stores/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDjFZ-902pHDKJ7Wfqw4p9Zx_aY7dqvJuQ',
  authDomain: 'bokkaa-vue3-firebase-app.firebaseapp.com',
  projectId: 'bokkaa-vue3-firebase-app',
  storageBucket: 'bokkaa-vue3-firebase-app.appspot.com',
  messagingSenderId: '676218921594',
  appId: '1:676218921594:web:7e973d9f75abe77003d1c3',
  measurementId: 'G-MTR2062181',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

//외부에서도 사용할거임
export { auth, db };

export default boot(async (/* { app, router, ... } */) => {
  const authStore = useAuthStore();

  //유저 상태 변환 감지하여 setUser
  onAuthStateChanged(auth, user => {
    console.log('###user', user);
    authStore.setUser(user);
  });
});
