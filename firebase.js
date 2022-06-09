// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG1-fZaAqa0jgw-Ms_eWhJIfn5heAZCf4",
  authDomain: "order-drinks-594fe.firebaseapp.com",
  projectId: "order-drinks-594fe",
  storageBucket: "order-drinks-594fe.appspot.com",
  messagingSenderId: "247794058384",
  appId: "1:247794058384:web:2a96ee232b8b5b0ee38415",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
