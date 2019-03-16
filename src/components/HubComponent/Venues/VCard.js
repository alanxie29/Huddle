import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-elements';


export default class VCard extends Component {
    render(props) {
        const styles = StyleSheet.create({
                    card: {
                        width: 340,
                        marginVertical: 20,
                        height: 150,

                    },
                    title: {
                        fontSize: 16,
                        fontFamily: 'OpenSans-Light',
                        color: 'black'
                    },
                    info: {
                        fontFamily: 'OpenSans-Light',
                        color: '#ccc',
                        fontSize: 16
        
                    },
                    vImage: {
                        width: 335,
                        height: 95,
                        borderRadius: 10,
                        marginBottom: 5,
                    }
                            
                })

        return (
            <View style={styles.card}>
            <Image style={styles.vImage} source={this.props.vImage}></Image>      
               <Text style={styles.title}>{this.props.place}</Text>
                <Text style={styles.info}>{this.props.date} {this.props.type}</Text>
                <AirbnbRating defaultRating='4'></AirbnbRating>      
            </View>
        )
    }
}