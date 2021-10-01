import firebase from "firebase/app";
import firestore from "firebase/firestore";
require('firebase/auth')

const firebaseConfig = {
    apiKey: "AIzaSyCbq2cMUMVfaZLD3kjGObsWfb2_pImRQJI",
    authDomain: "tcc-firebase-d816c.firebaseapp.com",
    databaseURL: "https://tcc-firebase-d816c-default-rtdb.firebaseio.com/",
    projectId: "tcc-firebase-d816c",
    storageBucket: "tcc-firebase-d816c.appspot.com",
    messagingSenderId: "166741744828",
    appId: "1:166741744828:web:cd434d36e14b20df2c04b9",
    measurementId: "G-3HY6YQ4D14"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;