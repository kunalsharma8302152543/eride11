import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBLa5-mMzmfBuVQJTPGIGwwQWfJq-z-_FE",
  authDomain: "eride-aa762.firebaseapp.com",
  projectId: "eride-aa762",
  storageBucket: "eride-aa762.appspot.com",
  messagingSenderId: "247227710463",
  appId: "1:247227710463:web:fd577c8e3cc1f78980c5ca"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
