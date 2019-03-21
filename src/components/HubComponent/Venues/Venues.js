import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import VCard from './VCard';

export default class Venues extends Component {
    state = {
        region1: {
            latitude: 43.8590,
            longitude: -79.3152,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        region2: {
            latitude: 43.854428,
            longitude: -79.337036,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    }
    render() {
        const styles = StyleSheet.create({
            holder: {
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
                    <VCard
                        place='Smash Kitchen & Bar'
                        vImage={require('../../../assets/images/smashbar.jpg')}
                        stars={4.2}
                        info="$$$ ⋅ Burgers and Comfort Food"
                        rating={56} distance={3.3}
                        region={this.state.region1}
                        desc="Stylish establishment with a patio featuring a modern take on classic comfort dishes and cocktails."
                        hours="Weekdays 11:30am - 11:00pm | Weekends 9:00am - 11:00pm"
                        origin="43.877442,-79.289679"
                        destination="43.859063,-79.314771">
                    </VCard>

                </View>
                <View style={styles.row}>
                    <VCard
                        place='St. Louis Bar & Grill'
                        vImage={require('../../../assets/images/stlouis.jpg')}
                        stars={3.5}
                        info="$$ ⋅ Burgers and Wings"
                        rating={102} distance={4.9}
                        region={this.state.region2}
                        desc="Informal hangout dishing out slow-roasted ribs, wings spiced to order and other deep-fried pub grub."
                        hours="Monday-Thursday 11:30am - 1:00am | Friday and Saturday 11:30am - 2:00am | Sunday 11:30am - 12:00am"
                        origin="43.877442,-79.289679"
                        destination="43.854162,-79.336894">
                    </VCard>

                </View>
                <View style={styles.row}>
                    <VCard place='Smash Kitchen & Bar' vImage={require('../../../assets/images/smashbar.jpg')} stars={4.2}
                        info="$$$ ⋅ Burgers and Comfort Food" rating='(56)' distance={3.3}></VCard>

                </View>
                <View style={styles.row}>
                    <VCard place='Smash Kitchen & Bar' vImage={require('../../../assets/images/smashbar.jpg')} stars={4.2}
                        info="$$$ ⋅ Burgers and Comfort Food" rating='(56)' distance={3.3}></VCard>

                </View>

            </ScrollView>
        )
    }
}