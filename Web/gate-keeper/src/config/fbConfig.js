import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

// Firebase configuration
var firebaseConfig = {

    apiKey: "AIzaSyDlSQn7GTXYxw_6qEMMs1aMmuCxjv2E_Ic",
    authDomain: "remote-gate-keeper-test.firebaseapp.com",
    projectId: "remote-gate-keeper-test",
    storageBucket: "remote-gate-keeper-test.appspot.com",
    messagingSenderId: "344648733292",
    appId: "1:344648733292:web:480b7b1682bd5a75ae7e49"

};

  // Initialize Firebase

const app  = firebase.initializeApp(firebaseConfig);
export const db = app.database();
export const auth = app.auth();

export default app;