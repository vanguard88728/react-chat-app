import { initializeApp } from "firebase/firebase-app";

const config = {
  apiKey: "AIzaSyAnFk1jl-q1_uNLWtw0-RShebQQS_hjL-M",
  authDomain: "react-chat-b0f6b.firebaseapp.com",
  projectId: "react-chat-b0f6b",
  storageBucket: "react-chat-b0f6b.appspot.com",
  messagingSenderId: "1088923933785",
  appId: "1:1088923933785:web:0ad65d4d18a4050d11e548",
  measurementId: "G-X0698XYW2R"
};

const app = initializeApp(config);
export const auth = app.auth();
export const db = app.firestore();
