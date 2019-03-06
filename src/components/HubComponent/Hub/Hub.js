import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class Hub extends Component {
    render() {
        const styles = StyleSheet.create({
            title: {
                textAlign: 'center',
                fontSize: 30,
                marginBottom: 15
            }
        })

        return (
            <View>
                <Text style={styles.title}>Bill Sheng Love Mujtaba Big Piece Hub</Text>
            </View>
        )
    }
}