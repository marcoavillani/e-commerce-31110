import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdpByTxmE-ADOKbfTHnwF8iVKBbfkq6Yg",
  authDomain: "e-commerce-8aafd.firebaseapp.com",
  projectId: "e-commerce-8aafd",
  storageBucket: "e-commerce-8aafd.appspot.com",
  messagingSenderId: "181859809925",
  appId: "1:181859809925:web:f7907d86f1ce12ca7907ec",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
