import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDp0NcbyFKt_Ddec4U5xYvd1izbJRCDcYA",
    authDomain: "emart-users.firebaseapp.com",
    databaseURL: "https://emart-users.firebaseio.com",
    projectId: "emart-users",
    storageBucket: "emart-users.appspot.com",
    messagingSenderId: "442414240713",
    appId: "1:442414240713:web:a025282ffadd094a420e18",
    measurementId: "G-JW0CFEP82B"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  // Get a reference to the database service
  export var UserDatabase = (path) => firebase.database().ref(path + '/');