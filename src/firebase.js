import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyAxuPyqEBnHdecTTQlmD0bj4gOwGWYiWDs",
    authDomain: "linkedin-clone-aae24.firebaseapp.com",
    projectId: "linkedin-clone-aae24",
    storageBucket: "linkedin-clone-aae24.appspot.com",
    messagingSenderId: "488305422799",
    appId: "1:488305422799:web:96e61abee06e07d59862ba"
  };

  const firebaseApp = initializeApp(firebaseConfig)
  const db = getFirestore(firebaseApp)
  const auth = getAuth(firebaseApp);


  export {db, auth}