import * as firebase from 'firebase'

const config = {
    // apiKey: "AIzaSyAoLaVa87Yh7EzQOIKtMhnGzPSu22o1Tys",
    // authDomain: "jinzhao-expensify-app.firebaseapp.com",
    // databaseURL: "https://jinzhao-expensify-app-default-rtdb.firebaseio.com",
    // projectId: "jinzhao-expensify-app",
    // storageBucket: "jinzhao-expensify-app.appspot.com",
    // messagingSenderId: "739402244606",
    // appId: "1:739402244606:web:7fb1e6ed7ae7ba91a9e0af",
    // measurementId: "G-KWSTB8LY7P"
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID  
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, database as default, googleAuthProvider }


// Playgrund:

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapShot) => {
//         expenses.push(
//             {
//                 id: childSnapShot.key,
//                 ...childSnapShot.val()
//             }
//         )
//     });
//     console.log(expenses);
// })

// database.ref().remove();

// database.ref().on('value', (snapshot) => {
//     // console.log(snapshot.val());
//     const {name, job} = snapshot.val();
//     console.log(`${name} works in ${job.company} as a ${job.title}`);
// });

// setTimeout(() => {
//     database.ref().update(
//         {
//             'job/company': 'Google'
//         }
//     );
// }, 2000);



// database.ref().set(
//     {
//         name: "Jinzhao",
//         age: 25,
//         location: {
//             city: "Santa Clara",
//             state: "CA"
//         },
//         stressLevel: 6,
//         job: {
//             title: "SDE",
//             company: "Google"
//         }
//     }
// );

// database.ref('attribute').set(
//     {
//         height: "180",
//         weight: "75"
//     }
// ).then(() => {
//     console.log('Data is saved.');
// }).catch((e) => {
//     console.log("Failed", e);
// })


// database.ref().update(
//     {
//         stressLevel: 9,
//         "job/company": 'Amazon'
//     }
// )