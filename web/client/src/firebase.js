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

export const database = firebase.database();

// {
//     // Chats contains only meta info about each conversation
//     // stored under the chats's unique ID
//  let john = { "courts": {
//       "<courtID>": {
//         "title": "Historical Tech Pioneers",
//         "lastMessage": "ghopper: Relay malfunction found. Cause: moth.",
//         "timestamp": 1459361875666
//       },
//       "two": { ... },
//       "three": { ... }
//     },
//     // Messages are separate from data we may want to iterate quickly
//     // but still easily paginated and queried, and organized by chat
//     // conversation ID
//     "messages": {
//       "<courtID>": [{
//         "m1": {
//           "name": "eclarke",
//           "message": "The relay seems to be malfunctioning.",
//           "timestamp": 1459361875337
//         }},{
//         "m2": { ... }},
//         "m3": { ... }
//       }],
//       "two": { ... },
//       "three": { ... }
//     }
//   }