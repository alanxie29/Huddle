import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';

import { Rating } from 'react-native-elements';
import { MapView, Marker } from 'expo';




export default class VCard extends Component {
    state = {
        modalVisible: false,
      };
    
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }


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
                    vImage: {
                        width: 335,
                        height: 95,
                        borderRadius: 10,
                        marginBottom: 5,
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
                    }

                })

        return (
            
        <TouchableOpacity style={styles.card} onPress={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
        
          <Modal animationType="slide" transparent={false} visible={this.state.modalVisible} onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            }}>
            <View style={styles.modal}>
             <MapView
            style={{ flex: 1 }}
            region={this.props.region}>
            </MapView>

            <Text style={styles.modalTitle}>{this.props.place}</Text>
            <Text style={styles.close} onPress={() => this.setModalVisible(!this.state.modalVisible)}>Go Back</Text>

 
            </View>
            </Modal>
          
            <Image style={styles.vImage} source={this.props.vImage}></Image>                
               <View style={{flexDirection:'row'}}><Text style={styles.title}>{this.props.place}</Text>
               <Text style={styles.distance}>{this.props.distance}km</Text>
                

            </View>
            
            <View style={{flexDirection:'row'}}> 
                <Text style={styles.info}>{this.props.info}</Text> 
                <Rating imageSize={14} fractions={1} readonly startingValue={this.props.stars} style={{ paddingTop: 3, marginLeft: 65}}></Rating>
                <Text style={styles.ratingNumber}>{this.props.rating}</Text>
            </View>                    
            </TouchableOpacity>
        )
    }
}