import firebase from 'firebase/app';
import 'firebase/storage';
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAu60ErVnrBt0I_rCYGgFKi1pU34XH93g4",
    authDomain: "tcc1-c9f95.firebaseapp.com",
    projectId: "tcc1-c9f95",
    storageBucket: "tcc1-c9f95.appspot.com",
    messagingSenderId: "316355493407",
    appId: "1:316355493407:web:0951745da5398e4bbc9f2a"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.firestore();

  export default firebase;