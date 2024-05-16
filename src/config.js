


import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  // Your Firebase config object
  apiKey: "AIzaSyC9qH1upVvkIz8FVgNNTs8baiefBdg0m4g",
  authDomain: "gaming-community-1cb36.firebaseapp.com",
  projectId: "gaming-community-1cb36",
  storageBucket: "gaming-community-1cb36.appspot.com",
  messagingSenderId: "100782276496",
  appId: "1:100782276496:web:eb2009fb9c5aa07f14bd15",
  measurementId: "G-TXC7WS7RJH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
