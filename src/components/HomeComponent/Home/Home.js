import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';



export default class Home extends Component {
    render() {
        const styles = StyleSheet.create({
            title: {
                textAlign: 'center',
                fontSize: 30,
                marginBottom: 15,
                fontFamily: 'Poppins-BlackItalic'
            }
        })

        return (
            <View>
                <Text style={styles.title}>Bill Sheng Love Mujtaba Big Piece Home</Text>
            </View>
        )
    }
}