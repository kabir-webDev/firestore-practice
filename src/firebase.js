import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBn_aCAKcgpMqYLgRAV9qwUM9VdgzUdXfo",
  authDomain: "firbase-learn-360.firebaseapp.com",
  projectId: "firbase-learn-360",
  storageBucket: "firbase-learn-360.appspot.com",
  messagingSenderId: "196987928754",
  appId: "1:196987928754:web:d41acbd8444bbaa47d49ab",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
