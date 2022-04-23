import firebase from "firebase/app"
import "firebase/firestore"

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvJATjiXi9zp-W0pFsH90zNvZXfpMV9g8",
  authDomain: "qwitter-7983d.firebaseapp.com",
  projectId: "qwitter-7983d",
  storageBucket: "qwitter-7983d.appspot.com",
  messagingSenderId: "111007114783",
  appId: "1:111007114783:web:20c706ce4c2d11b1b7972a"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore()

export default db
