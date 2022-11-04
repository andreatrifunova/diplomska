import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBfDXGzeWZpHFpb7t8bLZmDJh2QVkATt7g",
  authDomain: "form181159.firebaseapp.com",
  projectId: "form181159",
  storageBucket: "form181159.appspot.com",
  messagingSenderId: "187201449599",
  appId: "1:187201449599:web:29020ffea295a04768d94a",
  measurementId: "G-0QGLVQFBLZ"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export  {auth};
