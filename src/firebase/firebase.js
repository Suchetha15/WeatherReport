import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBfweyWHowZI2Gdgigo3qr0R3MHZpEWbCQ",
    authDomain: "boilerplate-v2.firebaseapp.com",
    databaseURL: "https://boilerplate-v2.firebaseio.com",
    projectId: "boilerplate-v2",
    storageBucket: "",
    messagingSenderId: "388467696430"
  };
firebase.initializeApp(config);
const database = firebase.database();
  database.ref().set({
      name: "Suchetha",
      stresslevel: 5,
      job: {
        title: "Software Developer",
        company: "Google"
      },
      location: {
          city: "Bengaluru",
          Country: "India"
      },
      age: 24
  }).then(() => {
        console.log('Data is saved!!');
    }).catch((error) => {
        console.log('This failed: ', error);
    });
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
// const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
export { firebase, googleAuthProvider, facebookAuthProvider,  database as default};