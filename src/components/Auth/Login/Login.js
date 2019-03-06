import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';

export default class Login extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: ''
    }

    loginRequest() {
        const email = this.state.email;
        const password = this.state.password;
        console.log(email, password)
    }

    render() {
        const styles = StyleSheet.create({
            title: {
                textAlign: 'center', 
                fontSize: 30, 
                marginBottom: 15
            },
            textInput: {
                height: 40, 
                width: 320, 
                borderColor: 'gray', 
                borderWidth: 1,
                marginBottom: 15,
                borderRadius: 5,
                padding: 10
            },
            line: {
                borderBottomWidth: 1,
                marginTop: 20,
                marginBottom: 20,
                width: 200,
            },
            wrapper: {
                justifyContent: 'center',
                alignItems: 'center',
            },
            container: {
                marginTop: '35%',
                marginBottom: 'auto',
                flex: 1,
                alignItems: 'center',
                backgroundColor: '#F5FCFF',
            }
        })

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Huddle</Text>
                <TextInput value={this.state.email} onChangeText={input => this.setState({email: input})} placeholder="Email" style={styles.textInput}/>
                <TextInput value={this.state.password} onChangeText={input => this.setState({password: input})} placeholder="Password" secureTextEntry={true} style={styles.textInput}/>
                <Button onPress={() => this.props.navigation.navigate('Home') && this.loginRequest.bind(this)} title="Login"/>
                <View style={styles.wrapper}>
                    <View style={styles.line}/>
                </View>
                <Button onPress={() => this.props.navigation.navigate('SignUp')} title="Sign Up"/>
            </View>
        )
    }
}