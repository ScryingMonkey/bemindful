import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { FirebaseAppProvider } from "reactfire";
import "./index.css";
import App from "./App";

const firebaseConfig = {
  apiKey: "AIzaSyDZa3cyoDuZU_iGUI5k4uRbgIbbGdBaqkM",
  authDomain: "bemindful-989d4.firebaseapp.com",
  databaseURL: "https://bemindful-989d4.firebaseio.com",
  projectId: "bemindful-989d4",
  storageBucket: "bemindful-989d4.appspot.com",
  messagingSenderId: "22247098551",
  appId: "1:22247098551:web:64c284062eeb412a28e532",
  measurementId: "G-QH33TWRQRX"
};

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={<span>Loading...</span>}>
      <App />
    </Suspense>
  </FirebaseAppProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
