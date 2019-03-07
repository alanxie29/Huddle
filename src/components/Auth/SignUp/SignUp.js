import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class SignUp extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: '',
        loading: ''
    }

    signUpRequest() {
        const name = this.state.name;
        const email = this.state.email;
        const password = this.state.password;
        const confirmPassword = this.state.confirmPassword;
        if (password !== confirmPassword) {
            console.log(this.state.error)
        }
        else console.log(name, email, password);
    }

    render() {
        const styles = StyleSheet.create({
            back: {
                position: 'absolute',
                top: 0,
                right: 0,
                marginTop: 10,
                marginRight: 30
            },
            title: {
                textAlign: 'center',
                marginTop: 60,
                fontFamily: 'OpenSans-Light',
                color: '#000',
                fontSize: 34,
            },
            subtitle: {
                fontFamily: 'OpenSans-Light',
                textAlign: 'center',
                color: '#ccc',
                fontSize: 16,
                marginBottom: 60
            },
            textInput: {
                textAlign: 'center',
                height: 45,
                width: 300,
                borderColor: '#ccc',
                borderBottomWidth: 1,
                fontFamily: 'OpenSans-Light',
                marginBottom: 20,
                padding: 10,
            },
            container: {
                marginBottom: 'auto',
                flex: 1,
                alignItems: 'center',
                backgroundColor: '#fff'
            },
            button: {
                padding: 10,
                backgroundColor: '#2ecc71',
                borderRadius: 20,
                width: 300,
                height: 45
            },
            buttonText: {
                textAlign: 'center',
                color: 'white'
            }


        })

        return (

            <View style={styles.container}>
                <Ionicons name="ios-close" size={40} color="black" style={styles.back} onPress={() => this.props.navigation.navigate('Welcome')}></Ionicons>
                <Text style={styles.title}>CREATE YOUR ACCOUNT</Text>
                <Text style={styles.subtitle}>These can be adjusted in your settings</Text>
                <TextInput value={this.state.name} onChangeText={input => this.setState({ name: input })} placeholder="Full Name" autoCapitalize="words" style={styles.textInput} />
                <TextInput value={this.state.email} onChangeText={input => this.setState({ email: input })} placeholder="Email" style={styles.textInput} />
                <TextInput value={this.state.password} onChangeText={input => this.setState({ password: input })} placeholder="Password" secureTextEntry={true} style={styles.textInput} />
                <TextInput value={this.state.confirmPassword} onChangeText={input => this.setState({ confirmPassword: input })} placeholder="Confirm Password" secureTextEntry={true} style={styles.textInput} />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home') && this.signUpRequest.bind(this)} style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View >
        )
    }
}