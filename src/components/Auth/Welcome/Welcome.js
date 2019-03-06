import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

export default class Welcome extends Component {


    render() {

        const styles = StyleSheet.create({
            container: {
                marginBottom: 'auto',
                flex: 1,
                alignItems: 'center',
                textAlign: 'center',
                backgroundColor: '#1F1F1F',
            },
            subtitle: {
                fontSize: 16,
                color: 'white'
            },
            image: {

            },
            line: {
                width: 320,
                height: 20,
                backgroundColor: '#FFDC7F',
                marginTop: 10
            },
            button: {
                backgroundColor: '#FFDC7F',
                color: '#1F1F1F',
            },
            signintext: {
                fontSize: 14,
                color: '#FFF'
            },
            signin: {
                fontSize: 14,
                color: '#FFDC7F'
            }
        
        });
        const { navigate } = this.props.navigation;


        return (
            <View style={styles.container}>
                <Image source={require('../../../assets/images/white.png')} style={styles.image} />
                <View style={styles.line} />
                <Text style={styles.subtitle}> Connecting Football Fans </Text>
                <Text style={styles.subtitle}> Supporting Local Venues </Text>
                <Button title="Sign Up" style={styles.button} onPress={() => navigate('SignUp')} />
                <Text style={styles.signintext}>Already have an account?</Text>
                <Button title="Sign In" style={styles.button} onPress={() => navigate('Login')} />
            </View>
        )
    }



}