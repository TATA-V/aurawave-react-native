import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// import { getFirestore } from 'firebase/firestore';
// import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBWHmyQlNy3S1FSlX_7nTmIu9bJ2sgBOZM',
  authDomain: 'aurawave-46b93.firebaseapp.com',
  projectId: 'aurawave-46b93',
  storageBucket: 'aurawave-46b93.appspot.com',
  messagingSenderId: '595726720448',
  appId: '1:595726720448:web:ddad654e068031b5f17c25',
  measurementId: 'G-7SVG4XXW18',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const storage = getStorage();
// export const firestore = getFirestore();
// export const database = getDatabase();
export default app;
