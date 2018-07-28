import React, { Component } from 'react';
import {TouchableOpacity, Text, TextInput, Button, View, StyleSheet} from "react-native"; 
import config from '../../config/index'


class Register extends Component {
    constructor(){
        super();
        this.state = {
            credentials: {
                email: "",
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

    register(){
        fetch(config.baseUrl + 'login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.credentials),
        })
        .then(response => response.json())
        .then(jsonResponce => {
            if(jsonResponce.confirmation === "success"){
                this.props.navigation.navigate('main')
            }else{
                throw new Error({
                    message: "something went wrong"
                })
            }
        })
        .catch(err => {
            alert(err);
        })
        
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
                value={this.state.credentials.email}
                onChangeText={text => this.updateText(text, 'email')}
                placeholder="email" 
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
