import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Permissions, Location } from 'expo';




export default class Home extends Component {
    state = {
        hasLocationPermission: null,
    };

    componentDidMount() {
        this._getLocationAsync();
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                locationResult: 'Permission to access location was denied'
            });
        } else {
            this.setState({ hasLocationPermission: true });
        }
    }

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
                marginBottom: 15,
            }
        })

        return (
            <View style={styles.container}>

                <Text style={styles.title}>Bill Sheng Love Mujtaba Big Piece Home</Text>
                <Text>{this.state.locationResult}</Text>
            </View>
        )
    }
}