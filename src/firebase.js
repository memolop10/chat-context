import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDSYRDloH1F6WKFe3WfQqFsW0BHf1Ymtyw",
    authDomain: "chat-3-85740.firebaseapp.com",
    projectId: "chat-3-85740",
    storageBucket: "chat-3-85740.appspot.com",
    messagingSenderId: "628181939621",
    appId: "1:628181939621:web:15354d8031dc56be16244c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { db, auth, provider }