import { getAnalytics } from 'firebase/analytics';
import { initializeApp, type FirebaseOptions } from 'firebase/app';

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'reactdrums.firebaseapp.com',
  projectId: 'reactdrums',
  storageBucket: 'reactdrums.appspot.com',
  messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: import.meta.env.FIREBASE_MEASUREMENT_ID,
};

export const firebaseInit = initializeApp(firebaseConfig);
export const firebaseAnalytics = getAnalytics(firebaseInit);
