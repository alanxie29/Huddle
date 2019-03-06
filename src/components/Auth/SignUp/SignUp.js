import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';

export default class SignUp extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        favouriteTeam: '',
        error: '',
        loading: ''
    }

    signUpRequest() {
        const name = this.state.name;
        const email = this.state.email;
        const password = this.state.password;
        const confirmPassword = this.state.confirmPassword;
        const favouriteTeam = this.state.favouriteTeam;
        if (password !== confirmPassword) {
            console.log(this.state.error)
        }
        else console.log(name, email, password, favouriteTeam);
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
                marginTop: '20%',
                marginBottom: 'auto',
                flex: 1,
                alignItems: 'center',
                backgroundColor: '#F5FCFF',
            }
  
        })

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Huddle</Text>
                <TextInput value={this.state.name} onChangeText={input => this.setState({ name: input })} placeholder="Name" style={styles.textInput} />                
                <TextInput value={this.state.email} onChangeText={input => this.setState({ email: input })} placeholder="Email" style={styles.textInput} />
                <TextInput value={this.state.password} onChangeText={input => this.setState({ password: input })} placeholder="Password" secureTextEntry={true} style={styles.textInput} />
                <TextInput value={this.state.confirmPassword} onChangeText={input => this.setState({ confirmPassword: input })} placeholder="Confirm Password" secureTextEntry={true} style={styles.textInput} />
                <TextInput value={this.state.favouriteTeam} onChangeText={input => this.setState({ favouriteTeam: input })} placeholder="Favourite Team" style={styles.textInput} />
                
                <View style={styles.wrapper}>
                    <View style={styles.line} />
                </View>
                <Button onPress={() => this.props.navigation.navigate('Home') && this.signUpRequest.bind(this)} title="Sign Up" />
            </View>
        )
    }
}