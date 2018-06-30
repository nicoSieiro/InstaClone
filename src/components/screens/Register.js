import React, { Component } from 'react';
import {TouchableOpacity, Text, TextInput, Button, View, StyleSheet} from "react-native"; 

class Register extends Component {
    constructor(){
        super();
        this.state = {
            credentials: {
                username: "",
                password: ""
            }
        }
    }

    updateText(text, field){
        let newCredentials = Object.assign(this.state.credentials)
        newCredentials[field] = text;
        this.setState({
            crendentials: newCredentials
        })
    }

    register(){ //Navigate to Main
        //send credentials to server
        //if signup success
        alert(JSON.stringify(this.state.credentialsgt))
        this.props.navigation.navigate('main');
        //else error msg
        
    }

  render() {
    return (
        <View 
            style={{
                height: 100 + "%",
                width: 100 + "%",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                //backgroundColor: "rgb(252,61,57)"
            }}
        >
            <Text>Register PAGE</Text>
            <TextInput
                autoCorrect={false}
                value={this.state.credentials.username}
                onChangeText={text => this.updateText(text, 'username')}
                placeholder="Username" 
                style={styles.input}
            />
            <TextInput
                autoCorrect={false}
                onChangeText={text => this.updateText(text, 'password')}
                secureTextEntry 
                placeholder="Password" 
                style={styles.input}
            />
            <Button 
                onPress={() => {
                    this.register();
                }} 
                title="Signup"
            />
        </View>
    )
  }
};

const styles = StyleSheet.create({
    input:{
        height: 50,
        width: 100 + "%",
        paddingHorizontal: 50,

    }
})

export default Register;
