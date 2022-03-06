import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyApVMu_l1leJN8EbYgp1zhINi6G5bjZJjk",
    authDomain: "crown-db-e95f3.firebaseapp.com",
    projectId: "crown-db-e95f3",
    storageBucket: "crown-db-e95f3.appspot.com",
    messagingSenderId: "156187475085",
    appId: "1:156187475085:web:ab79b8528c9ea321c836c4",
    measurementId: "G-VB3LSC9LE5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithgoogle = () => auth.signInWithPopup(provider);

export default firebase;