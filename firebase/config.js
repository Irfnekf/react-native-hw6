import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAkXHcI6fhWNQ6QwdFnsjHXIvBkbcUTc-Y',
  authDomain: 'rn-social-df92f.firebaseapp.com',
  projectId: 'rn-social-df92f',
  storageBucket: 'rn-social-df92f.appspot.com',
  messagingSenderId: '530294407654',
  appId: '1:530294407654:web:ce838022c37dc8294c1627',
  measurementId: 'G-EMT2ZX9CBJ',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
