import React, { Component } from 'react';
import {TouchableOpacity, Text, TextInput, Button, View} from "react-native"; 

class Login extends Component {
    
    login(){ //Navigate to Main
        this.props.navigation.navigate('register');
    }

  render() {

    return (
        <TouchableOpacity 
            style={{
                height: 100 + "%",
                width: 100 + "%",
                flex: 1,
                justifyContent: "center"
            }}
        
            onPress={() => this.login()}
        >
            <Text>New user?</Text>
        </TouchableOpacity>
    )
  }
};

export default Login;
