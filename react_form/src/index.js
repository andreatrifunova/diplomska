import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const functions = require('firebase-functions');
// let myCostlyVariable=0;

// exports.function = functions.https.onRequest((req, res) => {
//     myCostlyVariable= myCostlyVariable+100;
//     res.status(200).send('OK');
// });



reportWebVitals();
