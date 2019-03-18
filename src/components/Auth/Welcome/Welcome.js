import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

export default class Welcome extends Component {


    render() {

        const styles = StyleSheet.create({
            container: {
                marginBottom: 'auto',
                flex: 1,
                alignItems: 'center',
                textAlign: 'center',
                backgroundColor: '#272727',
            },
            logo: {
                marginTop: 160,
                height: 100,
                width: 240,
            },
            line: {
                width: 240,
                height: 5,
                backgroundColor: '#FFDC7F',
                marginBottom: 20
            },
            subtitle: {
                fontSize: 17,
                color: '#FFF',
                fontFamily: 'OpenSans-Light'
            },
            button: {
                marginTop: 100,
                padding: 10,
                backgroundColor: '#FFDC7F',
                borderRadius: 20,
                width: 260,
                height: 40,
                marginBottom: 10
            },
            buttonText: {
                textAlign: 'center',
                color: '#272727',
                fontFamily: 'OpenSans-Regular',
                fontSize: 17,
            },
            signIn: {
                fontFamily: 'OpenSans-Regular',
                color: '#FFDC7F'
            }

        });

        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../../../assets/images/splash.png')} />
                <View style={styles.line} />
                <Text style={styles.subtitle}> Connecting Football Fans </Text>
                <Text style={styles.subtitle}> Supporting Local Venues </Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')} style={styles.button}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
                <Text style={styles.subtitle}>Already have an account? <Text onPress={() => this.props.navigation.navigate('Login')} style={styles.signIn}>Sign In</Text></Text>
            </View>
        )
    }



}