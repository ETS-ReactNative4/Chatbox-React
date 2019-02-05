import Rebase from 're-base'; 
import firebase from 'firebase/app';
import 'firebase/database'

const fireBaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBuEug_-7WzhH2h4l6jWsmceMkcMv3ih-E",
  authDomain: "chatbox-ea1b1.firebaseapp.com",
  databaseURL: "https://chatbox-ea1b1.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export {fireBaseApp}
export default base;