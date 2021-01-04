import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDfQOmjEbR66Ii477QLvqwHJup7UOR8Aow",
    authDomain: "cbrf1-8d38a.firebaseapp.com",
    projectId: "cbrf1-8d38a",
    storageBucket: "cbrf1-8d38a.appspot.com",
    messagingSenderId: "268020091635",
    appId: "1:268020091635:web:a34989310bd637dfa70586",
    measurementId: "G-JX7CW3HDMW"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;