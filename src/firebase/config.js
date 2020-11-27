import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDsE_QoHcrzDsSRg-BWc8UZ4-CNtMyBmlQ",
    authDomain: "singulart-eb8b9.firebaseapp.com",
    databaseURL: "https://singulart-eb8b9.firebaseio.com",
    projectId: "singulart-eb8b9",
    storageBucket: "singulart-eb8b9.appspot.com",
    messagingSenderId: "302344657280",
    appId: "1:302344657280:web:7a642b1ddc9af59af64965",
    measurementId: "G-S7F7XG92ET"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, projectAuth, timestamp };
