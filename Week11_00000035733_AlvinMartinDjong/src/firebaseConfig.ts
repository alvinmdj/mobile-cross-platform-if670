import { initializeApp } from 'firebase/app';
// https://firebase.google.com/docs/web/setup#available-libraries

// firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCMwKn0bb4HMu11ZCiAn_tH1IMVzJuZ-nA',
  authDomain: 'mobile-cross-platform-we-43d23.firebaseapp.com',
  projectId: 'mobile-cross-platform-we-43d23',
  storageBucket: 'mobile-cross-platform-we-43d23.appspot.com',
  messagingSenderId: '1026606332226',
  appId: '1:1026606332226:web:44d13ddfb8fd15b99d30db'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
