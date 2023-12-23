// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getDatabase, set, ref, onValue } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4Jgpg4yIcv_xPAg_h_QPtj9_oWMysen8",
  authDomain: "jsi23-c9b68.firebaseapp.com",
  projectId: "jsi23-c9b68",
  storageBucket: "jsi23-c9b68.appspot.com",
  messagingSenderId: "669316761403",
  appId: "1:669316761403:web:df1284374116aedec7591e",
  measurementId: "G-Y3TTZN1HC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();

let username_input = document.getElementById("user_name");
let userage_input = document.getElementById("user_age");
let add_user_btn = document.getElementById("add_user");
let read_data = document.getElementById("read_data");

add_user_btn.addEventListener("click", function() {
  set(ref(database, "users/" + username_input.value), {
    username: userage_input.value,
    userage: userage_input.value,
  })

})

read_data.addEventListener("click", function() {
  onValue(ref(database, "users/"), {})
})