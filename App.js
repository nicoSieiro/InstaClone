import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import InstaClone from './src/InstaClone.js' 
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  
};
firebase.initializeApp(config);


export default class App extends Component {
  render() {
    return <InstaClone />
  }
}