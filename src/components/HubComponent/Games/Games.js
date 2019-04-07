import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import GCard from './GCard';
import axios from 'axios';
import Game from '../../../models/Game';

export default class Games extends Component {
    constructor() {
        super();
        this.state = {
            gamesData: [],
            games: [
                {
                    name: 'bill',
                    homeTeam: 'New England Patriots',
                    awayTeam: 'Arizona Cardinals',
                    homeImg: require('../../../assets/images/logos/newengland-patriots.png'),
                    awayImg: require('../../../assets/images/logos/arizona-cardinals.png'),
                    date: 'July 3rd, 2019',
                    location: '8:15 PM @ Gillette Stadium',
                    id: 1
                },
                {
                    name: 'brown',
                    homeTeam: 'Seattle Seahawks',
                    awayTeam: 'New Orleans Saints',
                    homeImg: require('../../../assets/images/logos/seattle-seahawks.png'),
                    awayImg: require('../../../assets/images/logos/neworleans-saints.png'),
                    date: 'July 11th, 2019',
                    location: '10:00 PM @ Markville Secondary Stadium',
                    id: 2
                },
                {
                    name: 'barestack',
                    homeTeam: 'Tennessee Titans',
                    awayTeam: 'Philadelphia Eagles',
                    homeImg: require('../../../assets/images/logos/tennessee-titans.png'),
                    awayImg: require('../../../assets/images/logos/philadelphia-eagles.png'),
                    date: 'July 18th, 2019',
                    location: '2:30 PM @ China Stadium',
                    id: 3
                },
            ],
            today: "20190113"
        }
    }

    componentDidMount() {
        // this.getToday()
        // this.getGames();
    }

    getGames = async () => {
        event.preventDefault();

        await axios.get(`localhost:8081/game/${this.state.today}`)
            .then(data => data.array.forEach(game => {
                gameObj = new Game(game.id, game.homeTeam, game.awayTeam, game.date, game.location, game.bettingOdds, game.inProgress);
                this.setState({gamesData: [...this.state.gamesData, gameObj]})
            }));
    }

    // getToday = async () => {
    //     var today = new Date();
    //     date = (today.getFullYear() + "" + ("0" + (today.getMonth() + 1)).slice(-2) + "" + today.getDate());
    //     const dateString = date.toString();
    //     this.setState({today: dateString}) 

    // }

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
                    <GCard key={game.id} homeImg={game.homeImg} awayImg={game.awayImg} homeTeam={game.homeTeam} awayTeam={game.awayTeam} date={game.date} location={game.location}></GCard>)}
            </ScrollView>
        )
    }
}