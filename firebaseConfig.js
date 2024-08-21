import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";


// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {

    apiKey: "AIzaSyAQjenCWv1lqa1z2Rkr-nz-1GcqWO-VI6g",
  
    authDomain: "elden-ring-app-26375.firebaseapp.com",
  
    projectId: "elden-ring-app-26375",
  
    storageBucket: "elden-ring-app-26375.appspot.com",
  
    messagingSenderId: "894622510102",
  
    appId: "1:894622510102:web:4eff9eba70721cc58a5937",
  
    measurementId: "G-8D5N15Y9SL"
  
  };
  

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

