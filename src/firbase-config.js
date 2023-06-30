import {getAuth} from 'firebase/auth';
import {initializeApp} from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDR2J6NYxJilfHbMRR8ZgKPq6b9W2RszKY",
    authDomain: "react-firebase-d635d.firebaseapp.com",
    projectId: "react-firebase-d635d",
    storageBucket: "react-firebase-d635d.appspot.com",
    messagingSenderId: "144768346808",
    appId: "1:144768346808:web:f37d2d75331c354002624d",
    measurementId: "G-ZCWKQCENHG"
  };

  const app = initializeApp(firebaseConfig);

  export const firbaseAuth = getAuth(app);