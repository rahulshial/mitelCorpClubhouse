import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'


if (!firebase.apps.length) {
  const config = {
    
  }
  firebase.initializeApp(config)
}

{/*REACT_APP_FIREBASE_API_KEY=AIzaSyC6sC2-x4l79lHJjpk3V-7AjoBmaEyTfP4
REACT_APP_FIREBASE_AUTH_DOMAIN=miteldecodehackathon-94d3c.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=miteldecodehackathon-94d3c
REACT_APP_FIREBASE_STORAGE_BUCKET=miteldecodehackathon-94d3c.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=266434199978
REACT_APP_FIREBASE_APP_ID=1:266434199978:web:9a23df295c301152652bd3*/}
    
    


const db = firebase.firestore()

const fireDb = {
  getCollection: async (collection) => {
    const ref = db.collection(collection)
    const data = await ref.get()
    return data.docs.map(doc => doc.data())
  },
}
//Name: string Followers: number Following: number Description: string Twitter Url: url Instagram Url: url
const auth = firebase.auth()

const fireAuth = {
  signInWithGoogle: () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  },
  signUp: (email, password) => auth.createUserWithEmailAndPassword(email, password), // with email password
  signIn: (email, password) => auth.signInWithEmailAndPassword(email, password), 
  signOut:() => auth.signOut(),
}

export {auth, db, fireDb}