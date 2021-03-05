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
  userCheck: async (uid, photoURL) => {
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
        photoURL: photoURL,
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    }
  })},
  followUser:(uid) => {
    const currentUserRef = db.collection('users').doc(fireAuth.currentUserUid);
    const userRef = db.collection('users').doc(fireAuth.currentUserUid);
    currentUserRef.update({following:auth.currentUser})
  }
 
}
//Name: string Followers: number Following: number Description: string Twitter Url: url Instagram Url: url
const auth = firebase.auth()

auth.onAuthStateChanged(() => {
  if (auth.currentUser){
    fireDb.userCheck(auth.currentUser.uid, auth.currentUser.photoURL)
  }
})

const fireAuth = {
  signInWithGoogle: async () => {
    if(!auth.currentUser) {
      return auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(() => {
          return true;
        }).catch(() => {
          return false;
        });
    }
  },
  signOut:() => {
    auth.signOut()
    console.log(auth)
  }
}


export {auth, db, fireDb, fireAuth}