import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDiXmNSS1j7sGIa8fWVK6A-l1_4mcsgN9I",
    authDomain: "travel-6fffe.firebaseapp.com",
    projectId: "travel-6fffe",
    storageBucket: "travel-6fffe.appspot.com",
    messagingSenderId: "1018654147286",
    appId: "1:1018654147286:web:6b76d9b1c6e166ea257f77",
    measurementId: "G-1DS37Q3F5C"
  };

  const fire = firebase.initializeApp(firebaseConfig)

export default firebase;