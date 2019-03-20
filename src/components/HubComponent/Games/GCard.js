import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';


export default class GCard extends Component {
    render() {
        const styles = StyleSheet.create({
            card: {
                width: 340,
                marginVertical: 20,
                height: 150,
            },
            title: {
                fontSize: 16,
                fontFamily: 'OpenSans-Regular',
                color: 'black',
                paddingTop: 3,
            },
            info: {
                fontFamily: 'OpenSans-Light',
                color: '#adadad',
                fontSize: 12,
                paddingTop: 3,
            },
            homeImg: {
                width: 150,
                height: 95,
                marginBottom: 5,
                marginRight: 80,
            },
            awayImg: {
                width: 150,
                height: 95,
                marginBottom: 5,
                marginLeft: 80,
            },
            img: {
                width: 95,
                height: 95
            }
        })

        return (
            <TouchableOpacity style={styles.card}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.img}>
                        <Image style={styles.homeImg} source={this.props.homeImg} resizeMode="center"></Image>
                    </View>
                    <View style={styles.img}>
                        <Image style={styles.awayImg} source={this.props.awayImg} resizeMode="center"></Image>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.title}>{this.props.homeTeam}</Text>
                    <Text style={styles.title}> vs </Text>
                    <Text style={styles.title}>{this.props.awayTeam}</Text>
                </View>
                <View>
                    <Text style={styles.info}>{this.props.date}</Text>
                    <Text style={styles.info}>{this.props.location}</Text>
                </View>

            </TouchableOpacity>
        )
    }
}
