// // Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// import  {getAuth} from "firebase/auth"
// import {getFirestore} from 'firebase/firestore'
// import {getStorage} from 'firebase/storage'

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig =
// {
//     apiKey: "AIzaSyC5IRFaqe0TfDhlUGBLSEMzgXUOVKu5Kio",
//     authDomain: "reactcollectionauth.firebaseapp.com",
//     projectId: "reactcollectionauth",
//     storageBucket: "reactcollectionauth.appspot.com",
//     messagingSenderId: "846967910460",
//     appId: "1:846967910460:web:db0053195b159147251339",
//     measurementId: "G-CCWECV96BY"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app)



// export default app;

// import firebase from 'firebase';
// import 'firebase/auth'
// import 'firebase/firestore'
// import 'firebase/storage'

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import {getStorage} from 'firebase/storage'

// const firebaseConfig =
// {
//     apiKey: "AIzaSyC5IRFaqe0TfDhlUGBLSEMzgXUOVKu5Kio",
//     authDomain: "reactcollectionauth.firebaseapp.com",
//     projectId: "reactcollectionauth",
//     storageBucket: "reactcollectionauth.appspot.com",
//     messagingSenderId: "846967910460",
//     appId: "1:846967910460:web:db0053195b159147251339",
//     measurementId: "G-CCWECV96BY"
// };

// firebase.initializeApp(firebaseConfig);
//  const auth = firebase.auth();
//  const db = firebase.firestore();
// //  const storage = firebase.storage();

//  export const storage = getStorage()
//  export {auth, db }


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGDwTa4omqFPFyhJWXxz7Yt_w_Ki1ZOjA",
  authDomain: "ecomm-72d72.firebaseapp.com",
  projectId: "ecomm-72d72",
  storageBucket: "ecomm-72d72.appspot.com",
  messagingSenderId: "54981124162",
  appId: "1:54981124162:web:b6e1746d57da8435ab8ddb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db =getFirestore(app);
export const storage =getStorage(app);



export default app;