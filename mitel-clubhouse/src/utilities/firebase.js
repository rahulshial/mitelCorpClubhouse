import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'


if (!firebase.apps.length) {
  const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
  }
  firebase.initializeApp(config)
}

const db = firebase.firestore()

const fireDb = {
  getCollection: async (collection) => {
    const ref = db.collection(collection)
    const data = await ref.get()
    return data.docs.map(doc => doc.data())
  },
  getUserData: async (uid) => { 
    const ref = db.collection('users').doc(uid)
    const data = await ref.get()
    return data.data()
  },
  userCheck: async (uid) => {
  const ref = db.collection('users').doc(uid)
  await ref.get().then((doc) => { 
    if (!doc.exists){ 
      db.collection('users').doc(uid).set({
        following: 0,
        followers: 0,
        followersList: {
          name: "uid",
        },
        followingList: {
          name: "uid",
        },
        twitter: "",
        instagram: "",
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    }
  })
  },
 
}
//Name: string Followers: number Following: number Description: string Twitter Url: url Instagram Url: url
const auth = firebase.auth()

const fireAuth = {
  signInWithGoogle: () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  },
  signOut:() => auth.signOut(),
  currentUserUid:() => {return auth.currentUser.uid},
  currentUserPhotoURl: () => {return auth.currentUser.photoURL}
}

export {auth, db, fireDb, fireAuth}