import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class Venues extends Component {
    render() {
        const styles = StyleSheet.create({
            container: {
                marginBottom: 'auto',
                flex: 1,
                alignItems: 'center',
                backgroundColor: '#272727'
            },
            title: {
                textAlign: 'center',
                fontSize: 30,
                marginBottom: 15
            }
        })

        
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Patrick Du Love Mujtaba Big Venues</Text>
            </View>
        )
    }
}