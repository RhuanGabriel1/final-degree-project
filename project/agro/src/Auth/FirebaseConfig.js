import firebase  from "firebase/app";
// import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAzikU9LCRqYZjQUz65IuNloCu0B3Js174",
  authDomain: "final-degree-project-dc0c7.firebaseapp.com",
  projectId: "final-degree-project-dc0c7",
  storageBucket: "final-degree-project-dc0c7.appspot.com",
  messagingSenderId: "906570629013",
  appId: "1:906570629013:web:3d21c361f0c8fa3c8f809c"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}