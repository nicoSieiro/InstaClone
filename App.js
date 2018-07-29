import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import InstaClone from './src/InstaClone.js' 
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDlVnYRX1Ojup91O6wUpUdiSqPjJzjHq6E",
  authDomain: "instaclone-e087e.firebaseapp.com",
  databaseURL: "https://instaclone-e087e.firebaseio.com",
  projectId: "instaclone-e087e",
  storageBucket: "instaclone-e087e.appspot.com",
  messagingSenderId: "945356985971"
};
firebase.initializeApp(config);


export default class App extends Component {
  render() {
    return <InstaClone />
  }
}