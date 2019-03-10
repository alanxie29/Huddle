import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import GCard from './GCard';

export default class Games extends Component {
    render() {
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
                <GCard game="49ers vs Rams" date="3/9/2019" type="Week 1 of 17" />
                <GCard game="Raiders vs Chiefs" date="3/11/2019" type="Week 1 of 17" />
                <GCard game="Cardinals vs Seahawks" date="3/13/2019" type="Week 1 of 17" />
                <GCard game="Chargers vs Broncos" date="3/15/2019" type="Week 1 of 17" />
                <GCard game="Colts vs Titans" date="3/17/2019" type="Week 1 of 17" />
                <GCard game="Packers vs Falcons" date="3/19/2019" type="Week 2 of 17" />
                <GCard game="Giants vs Jets" date="3/21/2019" type="Week 2 of 17" />
                <GCard game="Donkeys vs Dolphins" date="3/23/2019" type="Week 2 of 17" />
                <GCard game="Cardinals vs Seahawks" date="3/13/2019" type="Week 1 of 17" />
                <GCard game="Chargers vs Broncos" date="3/15/2019" type="Week 1 of 17" />
                <GCard game="Colts vs Titans" date="3/17/2019" type="Week 1 of 17" />
                <GCard game="Packers vs Falcons" date="3/19/2019" type="Week 2 of 17" />
                <GCard game="Giants vs Jets" date="3/21/2019" type="Week 2 of 17" />
                <GCard game="Donkeys vs Dolphins" date="3/23/2019" type="Week 2 of 17" />
                <GCard game="Cardinals vs Seahawks" date="3/13/2019" type="Week 1 of 17" />
                <GCard game="Chargers vs Broncos" date="3/15/2019" type="Week 1 of 17" />
                <GCard game="Colts vs Titans" date="3/17/2019" type="Week 1 of 17" />
                <GCard game="Packers vs Falcons" date="3/19/2019" type="Week 2 of 17" />
                <GCard game="Giants vs Jets" date="3/21/2019" type="Week 2 of 17" />
                <GCard game="Donkeys vs Dolphins" date="3/23/2019" type="Week 2 of 17" />
            </ScrollView>
        )
    }
}