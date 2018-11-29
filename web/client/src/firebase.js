import * as firebase from 'firebase';

let config = {
    apiKey: "AIzaSyDR1HrcEqVAm8NcuStJyZdMuM6uQFkEGYM",
    authDomain: "hoop-see.firebaseapp.com",
    databaseURL: "https://hoop-see.firebaseio.com",
    projectId: "hoop-see",
    storageBucket: "hoop-see.appspot.com",
    messagingSenderId: "478048053492"
};

firebase.initializeApp(config);

export default firebase;