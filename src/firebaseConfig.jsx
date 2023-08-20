
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyApSLeTUZuA9suBmA49jkftVuA_wlm_C7Q",
  authDomain: "librarymanagement-b28b8.firebaseapp.com",
  projectId: "librarymanagement-b28b8",
  storageBucket: "librarymanagement-b28b8.appspot.com",
  messagingSenderId: "483050334758",
  appId: "1:483050334758:web:4bb205ef1840078bf794e7",
  measurementId: "G-MWEQJ1Z7GY"
};


const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);