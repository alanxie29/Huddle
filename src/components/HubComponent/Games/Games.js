import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import GCard from './GCard';
import axios from 'axios';

export default class Games extends Component {
    constructor() {
        super();
        this.state = {games: [
            {
                name: 'bill',
                homeTeam: 'Patriots',
                awayTeam: '',
                homeImg: require('../../../assets/images/patriots.jpg'),
                awayImg: require('../../../assets/images/rams.jpg'),
                id: 1
            },
            {
                name: 'sheng',
                image: null,
                id: 2
            }
        ]}
    }

    componentDidMount() {
        this.getGames();
    }

    getGames = async () => {
        event.preventDefault()

        await axios.get('localhost:8081/')
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

        return (
            <ScrollView contentContainerStyle={styles.holder}>
               {games.map(game => 
               <GCard key={game.id} homeImg={game.homeImg} awayImg={game.awayImg} homeTeam={game.homeTeam}></GCard>)}
            </ScrollView>
        )
    }
}