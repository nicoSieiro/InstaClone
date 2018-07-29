import React, { Component } from 'react';
import {TouchableOpacity, Text, TextInput, View, StyleSheet} from "react-native"; 
import config from '../../config/index'
import {Container, Content, Header, Form, Input, item, Button, Label, Item, InputGroup} from 'native-base';
import * as firebase from 'firebase';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        console.log(this.props)
    }



    login = (email, password) => {
        console.log(email + " - " + password)
        try{
            firebase.auth().signInWithEmailAndPassword(email,password).then((registration) => {
                console.log(registration)
                var user = firebase.auth().currentUser;
                var name, email, photoUrl, uid, emailVerified;

                if (user != null) {
                    name = user.displayName;
                    email = user.email;
                    photoUrl = user.photoURL;
                    emailVerified = user.emailVerified;
                    uid = user.uid;
                    
                    this.props.navigation.navigate('main');
                }else{
                    alert("Something went wrong...")
                }

            })
        }
        catch(error){
            console.log(error)
        }
    }

    signUp = (email, password) => {
        try{
            if(this.state.password.length < 6){
                alert("Please enter atleast 6 characters")
                return;
            }
            firebase.auth().createUserWithEmailAndPassword(email,password)
        }
        catch(error){
            console.log(error)
        }
    }

  render() {
    return (
       <Container style={styles.container}>
            <Text>Register PAGE</Text>
            <Form>
                <Item floatingLabel>
                    <Label>Email</Label>
                    <Input
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={(email) => this.setState({email})}
                    />
                </Item>
                <Item floatingLabel>
                    <Label>Password</Label>
                    <Input
                        secureTextEntry={true}
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={(password) => this.setState({password})}
                    />
                </Item>
                <Button style={{marginTop:10}} 
                    full 
                    rounded 
                    success
                    onPress = {() => this.login(this.state.email,this.state.password)}
                >
                    <Text style={{color:"white"}}>Login</Text>
                </Button>
                <Button style={{marginTop:10}} 
                    full 
                    rounded 
                    primary
                    onPress = {() => this.signUp(this.state.email,this.state.password)}
                >
                    <Text style={{color:"white"}}>Signup</Text>
                </Button>
            </Form>


            {/* <TextInput
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
            /> */}
        </Container>
    )
  }
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent: 'center',
        padding:10,
    }
})

export default Register;
