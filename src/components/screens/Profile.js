import React, { Component } from 'react';
import {TouchableOpacity, Text} from "react-native"; 

class Profile extends Component {
    
    login(){
        //Navigate to Main
        this.props.navigation.navigate('main');
    }

  render() {

    return (
        <TouchableOpacity style={{
            height: 100 + "%",
            width: 100 + "%",
            flex: 1,
            justifyContent: "center"
            }}
            onPress={() => this.login()}
        >
            <Text>Profile PAGE</Text>
        </TouchableOpacity>
    )
  }
};

export default Profile;
