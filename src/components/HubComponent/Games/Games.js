import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import GCard from './GCard';

export default class Games extends Component {
    constructor() {
        super();
        this.state = {games: [
            {
                name: 'bill'
            },
            {
                name: 'sheng'
            }
        ]}
    }

    render() {
        let games = this.state.games
        const styles = StyleSheet.create({
            holder: {

                alignItems: 'center',
                paddingVertical: 20,
                width: '100%',
            },
            title: {
                textAlign: 'center',
                fontSize: 30,
                marginBottom: 15,
            }
        })

        console.log(this.state.games)
        return (
            <ScrollView contentContainerStyle={styles.holder}>
               {games.map(game => <Text>{game.name}</Text>)}
            </ScrollView>
        )
    }
}