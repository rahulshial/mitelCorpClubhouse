import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'


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
  }
}

export default fireDb