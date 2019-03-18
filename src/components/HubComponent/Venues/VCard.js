import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
import { Rating } from 'react-native-elements';
import { BackHandler } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MapView } from 'expo';
import { Marker } from 'react-native-maps';




export default class VCard extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }



    render(props) {
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
            modalClose: {
                width: 15,
                height: 15,
                marginTop: '50%',
                marginBottom: '50%',
            },
            radius: {
                height: 50,
                width: 50,
                borderRadius: 50 / 2,
                overflow: 'hidden',
                backgroundColor: 'rgba(0, 122, 255, 0.1)',
                borderWidth: 1,
                borderColor: 'rgba(0, 112, 255, 0.3)',
                alignItems: 'center',
                justifyContent: 'center'
            },
            marker: {
                height: 20,
                width: 20,
                borderWidth: 3,
                borderColor: 'white',
                borderRadius: 20 / 2,
                overflow: 'hidden',
                backgroundColor: '#007AFF'
            },
            modalButton: {
                width: '100%',
                height: 50
            }
        })

        return (

            <TouchableOpacity style={styles.card} onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
            }}>
                <View>
                    <Modal animationType="slide" transparent={false} visible={this.state.modalVisible} onRequestClose={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}>
                        <TouchableOpacity style={styles.modalButton} onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }}>
                            <Text style={{ textAlign: "center" }}>Go Back</Text>
                        </TouchableOpacity>
                        <MapView
                            style={{ flex: 1 }}
                            initialRegion={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}>
                            <Marker
                                coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                                title={"title"}
                                description={"description"}
                            >
                                <View style={styles.radius}>
                                    <View style={styles.marker} />
                                </View>
                            </Marker>
                        </MapView>


                    </Modal>
                </View>

                <Image style={styles.vImage} source={this.props.vImage}></Image>
                <View style={{ flexDirection: 'row' }}><Text style={styles.title}>{this.props.place}</Text>
                    <Text style={styles.distance}>{this.props.distance}km</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.info}>{this.props.info}</Text>
                    <Rating imageSize={14} fractions={1} readonly startingValue={this.props.stars} style={{ paddingTop: 3, marginLeft: 65 }}></Rating>
                    <Text style={styles.ratingNumber}>{this.props.rating}</Text>
                </View>
            </TouchableOpacity >
        )
    }
}



{/* <TouchableOpacity style={styles.card}
                onPress={() => {
                this.setState({modalVisible: false})
                } }>
            <Image
              style={[styles.modalClose]}
              source={require('../../../assets/images/close.png')} />
                </TouchableOpacity> */}