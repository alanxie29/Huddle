import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


export default class VCard extends Component {
    render(props) {
        const styles = StyleSheet.create({
            card: {
                width: 140,
                borderRadius: 20,
                padding: 10,
                marginVertical: 20,
                marginHorizontal: 20,
                height: 140,
                //backgroundColor: `${this.props.color}`
                borderWidth: 1,
                borderColor: "#FFDC7F"
            },
            title: {
                fontSize: 20,
                fontFamily: 'OpenSans-Light',
                color: 'white'
            },
            info: {
                fontFamily: 'OpenSans-Light',
                color: '#ccc',
                fontSize: 16

            },
            

        })

        return (
            <View style={styles.card}>
                <Text style={styles.title}>{this.props.bar}</Text>
                <Text style={styles.info}>{this.props.distance}</Text>
                
            </View>
        )
    }
}