
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9NB5XIyAUxiHCb5iMCpbLPbfSTuKHScU",
  authDomain: "teamproject-559fc.firebaseapp.com",
  projectId: "teamproject-559fc",
  storageBucket: "teamproject-559fc.appspot.com",
  messagingSenderId: "551725301236",
  appId: "1:551725301236:web:8687d29db3ac7fb7894da1"
};

const app = initializeApp(firebaseConfig);


export const createUser = async (email, password) => {
  return createUserWithEmailAndPassword(getAuth(app), email, password);
}

export const signInUser = async (email, password) => {
  return signInWithEmailAndPassword(getAuth(app), email, password);
}