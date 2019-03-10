import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import VCard from './VCard';

export default class Venues extends Component {
    render() {
        const styles = StyleSheet.create({
            holder: {
                backgroundColor: '#272727',
                alignItems: 'center',
                paddingVertical: 20,
                width: '100%',
            },
            row: {
                flex: 1,
                flexDirection: 'row'
            },
            title: {
                textAlign: 'center',
                fontSize: 30,
                marginBottom: 15
            }
        })


        return (
            <ScrollView contentContainerStyle={styles.holder} indicatorStyle="white">
                <View style={styles.row}>
                    <VCard bar="St.Louis Bar and Grill" distance="500 m" color="#1abc9c" />
                    <VCard bar="John's Pub" distance="750 m" color="#2ecc71"/>
                </View>
                <View style={styles.row}>
                    <VCard bar="Burger King" distance="930 m" color="#3498db"/>
                    <VCard bar="McDonalds" distance="1.2 km" color="#9b59b6"/>
                </View>
                <View style={styles.row}>
                    <VCard bar="The Fifth Social Club" distance="2.5 km" color="#f1c40f"/>
                    <VCard bar="Brixton" distance="3.7 km" color="#e67e22"/>
                </View>
                <View style={styles.row}>
                    <VCard bar="Harveys" distance="5 km" color="#e74c3c"/>
                    <VCard bar="Montanas" distance="5.9 km" color="#34495e"/>
                </View>
               
            </ScrollView>
        )
    }
}