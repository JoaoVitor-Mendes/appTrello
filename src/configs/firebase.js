import * as firebase from 'firebase';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyCaqP8bQYBdQIX0HBb7dd5gq-7L7QYWBJs",
    authDomain: "aulareactnative-51dca.firebaseapp.com",
    databaseURL: "https://aulareactnative-51dca.firebaseio.com",
    projectId: "aulareactnative-51dca",
    storageBucket: "aulareactnative-51dca.appspot.com",
    messagingSenderId: "546660708013",
    appId: "1:546660708013:web:33590508b78deef379e024",
    measurementId: "G-9Y1DLDKVB7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  export const database = firebase.firestore();