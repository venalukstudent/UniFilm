// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBktFT_4p33GhvzLyHibA5Rqr0Ba66JYlE',
  authDomain: 'unifilm-cf6d4.firebaseapp.com',
  projectId: 'unifilm-cf6d4',
  storageBucket: 'unifilm-cf6d4.firebasestorage.app',
  // Realtime Database URL (set from your Firebase console)
  databaseURL:
    'https://unifilm-cf6d4-default-rtdb.asia-southeast1.firebasedatabase.app',
  messagingSenderId: '508657572802',
  appId: '1:508657572802:web:b7f351dc0c56b5c585545b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and export it
const database = getDatabase(app);
const auth = getAuth(app);

export {app, database, auth};
