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

export const createUserProfileDocument = async (userAuth, additionalData) =>{
    // if the user not exist or not signed in
    if(!userAuth) return;

    // else 
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithgoogle = () => auth.signInWithPopup(provider);

export default firebase;