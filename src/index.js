import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyA5am8urNzcCSW8oUsjxJsH31LnO6kgdcU",
  authDomain: "guitarras-e-commers.firebaseapp.com",
  projectId: "guitarras-e-commers",
  storageBucket: "guitarras-e-commers.appspot.com",
  messagingSenderId: "742045217615",
  appId: "1:742045217615:web:f099ace5963b3106790b3a"
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
