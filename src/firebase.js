import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBFrkdMl2CnuPSTB-mAjZeWqevAUICr9Zs",
    authDomain: "automotive-parts-76793.firebaseapp.com",
    projectId: "automotive-parts-76793",
    storageBucket: "automotive-parts-76793.appspot.com",
    messagingSenderId: "1016254680447",
    appId: "1:1016254680447:web:8c618710ad9a5a1acfde4a",
    measurementId: "G-BK5QZ7R7EJ"
  };

  const fb = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  
  export {fb,db}