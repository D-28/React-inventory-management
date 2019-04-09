import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAHqXUMw2iu58ec17fBNBFC6rd5_D7orkY",
  authDomain: "catch-of-the-day-dan-shkolnik.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-dan-shkolnik.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
