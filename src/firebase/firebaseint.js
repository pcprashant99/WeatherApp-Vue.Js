import firebase from "firebase/app";
import "firebase/firestore";
var firebaseConfig = {
    apiKey: "AIzaSyAvIb-LGd0KiClfirrzUmgMYQFbWjrpmNA",
    authDomain: "weatherapp-8c922.firebaseapp.com",
    projectId: "weatherapp-8c922",
    storageBucket: "weatherapp-8c922.appspot.com",
    messagingSenderId: "710976342630",
    appId: "1:710976342630:web:15996252f64fd3db5efba7"
    };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();