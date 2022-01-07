import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA_FMbvWPErXnaZE8mxvt4Fvcf9kt8Ckuw",
  authDomain: "kpa-project-iccs.firebaseapp.com",
  databaseURL: "https://kpa-project-iccs-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kpa-project-iccs",
  storageBucket: "kpa-project-iccs.appspot.com",
  messagingSenderId: "459930563406",
  appId: "1:459930563406:web:f40077f82b2f7b8f54641f",
  measurementId: "G-YE3ZM8Z2DL"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
