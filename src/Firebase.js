import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCOiaFcvrg6gwAI162qYMLhIVxunY2nK1A",
    authDomain: "testing-firebase-3711d.firebaseapp.com",
    projectId: "testing-firebase-3711d",
    storageBucket: "testing-firebase-3711d.appspot.com",
    messagingSenderId: "593400832794",
    appId: "1:593400832794:web:fe37b9be7ba181f0eb02a3",
    measurementId: "G-WK3NXH6NZX"
};
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
onAuthStateChanged(auth, user => {
    console.log(user);
});
