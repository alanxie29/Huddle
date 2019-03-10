import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


export default class GCard extends Component {
    render(props) {
        const styles = StyleSheet.create({
            card: {
                width: 340,
                borderRadius: 20,
                padding: 10,
                marginVertical: 20,
                height: 100,
                borderWidth: 1,
                borderColor: '#FFDC7F'
            },
            title: {
                fontSize: 26,
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
                <Text style={styles.title}>{this.props.game}</Text>
                <Text style={styles.info}>{this.props.date} • {this.props.type}</Text>
            </View>
        )
    }
}