import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';


export default class GCard extends Component {
    render(props) {
        const styles = StyleSheet.create({
            card: {
                width: 340,
                marginVertical: 20,
                height: 150
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
                height: 60,
                marginBottom: 5,
                marginRight: 80,
            },
            awayImg: {
                width: 150,
                height: 60,
                marginBottom: 5,
                marginLeft: 80,
            },
            ratingNumber: {
                color: '#adadad',
                marginLeft: 2,
                fontSize: 14,
                fontFamily: 'OpenSans-Light'
            },
            distance: {
                marginLeft: 135,
                fontFamily: 'OpenSans-Regular',
                fontSize: 14,
                color: 'black',
                marginTop: 3,
            },
            modal: {
                height: 300,
                width: '100%'
            },
            modalTitle: {
                fontFamily: 'OpenSans-Bold',
                fontSize: 30
            },
            close: {
                position: 'relative',
                fontFamily: 'OpenSans-Regular',
                marginLeft: 15
            },
            banner: {
                flexDirection:'row'
            }

        })

        return (
            <TouchableOpacity>
            <View style={styles.banner}>
            <Image style={styles.homeImg} source={this.props.homeImg}></Image>
            <Image style={styles.awayImg} source={this.props.awayImg}></Image>
            </View>
            <View style={{flexDirection:'row'}}><Text style={styles.title}>{this.props.homeTeam}</Text>
            </View>


         </TouchableOpacity>
        )
    }
}