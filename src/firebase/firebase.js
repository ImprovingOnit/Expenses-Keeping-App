import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAj6nXyObtQw-Z2wBWH7zRi4wCxLR_NIFs",
    authDomain: "expensify-2a405.firebaseapp.com",
    databaseURL: "https://expensify-2a405.firebaseio.com",
    projectId: "expensify-2a405",
    storageBucket: "expensify-2a405.appspot.com",
    messagingSenderId: "141485961002"
};

firebase.initializeApp(config);

firebase.database().ref().set({
    name: 'Hello Name'
})