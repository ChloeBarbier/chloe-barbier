
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

// v9 compat packages are API compatible with v8 code
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCe2LcEtdRlVMo5oCSBw9O5FDV0UpsjzeA",
  authDomain: "chloe-barbier.firebaseapp.com",
  projectId: "chloe-barbier",
  storageBucket: "chloe-barbier.appspot.com",
  messagingSenderId: "91122260389",
  appId: "1:91122260389:web:b91ad4f1eccf14c1c8704c",
  measurementId: "G-C7M2MJBD1X"

};
firebase.initializeApp(firebaseConfig);

export default firebase;