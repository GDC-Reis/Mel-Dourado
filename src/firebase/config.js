import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCkPwN9er7vzccGQIPR_K9_9ZEjfKVs1D4",
  authDomain: "mel-dourado.firebaseapp.com",
  projectId: "mel-dourado",
  storageBucket: "mel-dourado.appspot.com",
  messagingSenderId: "345897051418",
  appId: "1:345897051418:web:ce3034373cc8332e1938a3"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};