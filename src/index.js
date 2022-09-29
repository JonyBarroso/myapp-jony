import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAW3TT3ZGWc0QlI9nRqJ6yCiadPJ9ik4x8",
  authDomain: "proyecto-jony.firebaseapp.com",
  projectId: "proyecto-jony",
  storageBucket: "proyecto-jony.appspot.com",
  messagingSenderId: "109936356149",
  appId: "1:109936356149:web:987e67b69aa6b05a3dfa7c",
  measurementId: "G-MQ7DKTF8B9"
};


initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
