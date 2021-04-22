import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD6dl81vFiThjWy6D6XaEr_Qr4UQpD307A",
  authDomain: "learn-firebase-8420d.firebaseapp.com",
  databaseURL: "https://learn-firebase-8420d.firebaseio.com",
  projectId: "learn-firebase-8420d",
  storageBucket: "learn-firebase-8420d.appspot.com",
  messagingSenderId: "993558558825",
  appId: "1:993558558825:web:ba7d10ee86d0aa80748af8",
  measurementId: "G-VT6VDTBMSH"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.database();
  }

  //Authentication

  //create user with email and password
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  //sign in with email and password
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  //sign out
  doSignOut = () => this.auth.signOut();

  //password reset
  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  //password update
  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);

  user = (uid) => this.db.ref(`users/${uid}`);
  users = () => this.db.ref("users");

  insertContact = (obj) => {
    this.db.ref("contacts").push(obj, (err) => {
      if (err) console.log(err);
    });
  };

  getcontacts = () => this.db.ref("contacts");
}

export default Firebase;
