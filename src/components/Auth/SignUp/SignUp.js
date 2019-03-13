import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class SignUp extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        error: '',
        loading: ''
    }

    signUpRequest() {
        event.preventDefault();

        const userSignUpDetails = {
            userSignUpEmail: this.state.email,
            userSignUpPassword: this.state.password,
            userSignUpName: this.state.name
        }

        axios.post('localhost:8081/signup', {userSignUpDetails})
          .then(success => {
            console.log(success)
        })
          .catch(error => {
              console.log(error);
        });
    }

    render() {
        const styles = StyleSheet.create({
            back: {
                position: 'absolute',
                top: 0,
                left: 0,
                marginTop: 10,
                marginLeft: 30
            },
            title: {
                textAlign: 'center',
                marginTop: 60,
                fontFamily: 'OpenSans-Light',
                color: '#ffffff',
                fontSize: 32,
            },
            subtitle: {
                fontFamily: 'OpenSans-Light',
                textAlign: 'center',
                color: '#ccc',
                fontSize: 16,
                marginBottom: 60
            },
            textInput: {
                height: 45,
                width: 300,
                borderColor: '#ccc',
                borderBottomWidth: 1,
                fontFamily: 'OpenSans-Light',
                marginBottom: 20,
                padding: 10,
                color: 'white'
            },
            container: {
                marginBottom: 'auto',
                flex: 1,
                alignItems: 'center',
                backgroundColor: '#272727'
            },
            button: {
                padding: 10,
                backgroundColor: '#FFDC7F',
                borderRadius: 20,
                width: 300,
                height: 45
            },
            buttonText: {
                textAlign: 'center',
                color: 'black',
                fontFamily: 'OpenSans-Regular',
                fontSize: 17

            }


        })

        return (

            <View style={styles.container}>
                <Ionicons name="ios-arrow-round-back" size={40} color="white" style={styles.back} onPress={() => this.props.navigation.navigate('Welcome')}></Ionicons>
                <Text style={styles.title}>CREATE YOUR ACCOUNT</Text>
                <Text style={styles.subtitle}>These can be adjusted in your settings</Text>
                <TextInput value={this.state.name} onChangeText={input => this.setState({ name: input })} placeholder="Full Name" autoCapitalize="words" style={styles.textInput} placeholderTextColor="white"/>
                <TextInput value={this.state.email} onChangeText={input => this.setState({ email: input })} placeholder="Email" style={styles.textInput} placeholderTextColor="white"/>
                <TextInput value={this.state.password} onChangeText={input => this.setState({ password: input })} placeholder="Password" secureTextEntry={true} style={styles.textInput} placeholderTextColor="white"/>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home') && this.signUpRequest.bind(this)} style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        )
    }
}