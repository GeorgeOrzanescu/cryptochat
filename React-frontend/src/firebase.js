import firebase from "firebase";


// access the database using this variable
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCm4WBZwMnJ5jP5uptZtx9Wyg2VnzGA8DA",
    authDomain: "cryptochat-f598b.firebaseapp.com",
    projectId: "cryptochat-f598b",
    storageBucket: "cryptochat-f598b.appspot.com",
    messagingSenderId: "702176069748",
    appId: "1:702176069748:web:29fff384298f4cf5a16921",
    measurementId: "G-T4V0F28RS4"
})

const db = firebaseApp.firestore();

const auth = firebase.auth()

export { db, auth };