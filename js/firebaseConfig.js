import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCsOFx4iR1x0i3tM5ZQTH_HEi8Z77Kxujs",
  authDomain: "crudcatalogo.firebaseapp.com",
  databaseURL: "https://crudcatalogo-default-rtdb.firebaseio.com",
  projectId: "crudcatalogo",
  storageBucket: "crudcatalogo.firebasestorage.app",
  messagingSenderId: "661629312137",
  appId: "1:661629312137:web:8fce52a158ef204359ba58",
  measurementId: "G-JT2DS0SVB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, app };