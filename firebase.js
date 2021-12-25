// Import the functions you need from the SDKs you need
import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA--5EJdIOs_0beer-3swMZB4yuXclP85M",
  authDomain: "finder-75fd6.firebaseapp.com",
  databaseURL: "https://finder-75fd6-default-rtdb.firebaseio.com",
  projectId: "finder-75fd6",
  storageBucket: "finder-75fd6.appspot.com",
  messagingSenderId: "530651301159",
  appId: "1:530651301159:web:87a1560f555a1812631502"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()
const db = app.firestore()

export { auth, db };

