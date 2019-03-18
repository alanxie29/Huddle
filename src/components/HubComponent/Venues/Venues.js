import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import VCard from './VCard';

export default class Venues extends Component {
    state= {
        region: {
            latitude: 43.8590,
            longitude: -79.3152,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
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
                    <VCard place='Smash Kitchen & Bar' vImage={require('../../../assets/images/smashbar.jpg')} stars={4.2}
                        info="$$$ ⋅ Burgers and Comfort Food" rating={56} distance={3.3} region={this.state.region}></VCard>
                </View>
                <View style={styles.row}>
                    <VCard place='Smash Kitchen & Bar' vImage={require('../../../assets/images/smashbar.jpg')} stars={4.2}
                        info="$$$ ⋅ Burgers and Comfort Food" rating={56} distance={3.3}></VCard>

                </View>
                <View style={styles.row}>
                    <VCard place='Smash Kitchen & Bar' vImage={require('../../../assets/images/smashbar.jpg')} stars={4.2}
                        info="$$$ ⋅ Burgers and Comfort Food" rating={56} distance={3.3}></VCard>

                </View>
                <View style={styles.row}>
                    <VCard place='Smash Kitchen & Bar' vImage={require('../../../assets/images/smashbar.jpg')} stars={4.2}
                        info="$$$ ⋅ Burgers and Comfort Food" rating={56} distance={3.3}></VCard>

                </View>
                    
            </ScrollView>
        )
    }
}