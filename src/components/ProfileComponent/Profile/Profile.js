import React from 'react';
import { Button, Image, View, Text, TouchableOpacity } from 'react-native';
import { ImagePicker } from 'expo';
import { Ionicons } from '@expo/vector-icons';


export default class Profile extends React.Component {
  state = {
    image: ('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'),
  };
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      qualtiy: 1
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  _takeImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  render() {
    let { image } = this.state;
    const styles = {
      container: {
        marginBottom: 'auto',
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#272727',

      },
      Holder: {
        paddingVertical: 20,
        marginTop: 30,
        width: 340,
        height: 600,

      },

      name: {
        textAlign: 'center',
        fontFamily: 'OpenSans-Light',
        color: 'white',
        fontSize: 30,
      },
      image: {
        width: 150,
        height: 150,
        borderRadius: 80,
        marginVertical: 5
      },
      cameraButton: {
        padding: 10,
        marginHorizontal: 10,
        backgroundColor: '#FFDC7F',
        borderRadius: 50,
        height: 50,
        width: 50,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
      },
      icon: {
        color: 'white'
      },
      infoContainer: {
        textAlign: 'left',
        paddingHorizontal: 20,
        paddingVertical: 5
      },
      userInfo: {
        fontFamily: 'OpenSans-Light',
        fontSize: 16,
        color: 'white',
        marginVertical: 10
      },
      userInfoInput: {
        color: '#ccc',
      },
      logoutButton: {
        width: 120,
        height: 40,
        borderRadius: 30,
        backgroundColor: '#e74c3c',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
      },
      logoutText: {
        fontFamily: 'OpenSans-Light',
        fontSize: 16,
        color: 'white'
      }


    }
    return (
      <View style={styles.container}>

        <View style={styles.Holder}>

          <View style={{ alignItems: 'center' }}>
            <Text style={styles.name}>Bill Sheng</Text>
            {image &&
              <Image source={{ uri: image }} style={styles.image} />}
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={styles.cameraButton} onPress={this._takeImage}>
                <Ionicons name="ios-camera" size={30} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.cameraButton} onPress={this._pickImage}>
                <Ionicons name="ios-images" size={30} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.userInfo}>Email: <Text style={styles.userInfoInput}>billxsheng@gmail.com</Text></Text>
            <Text style={styles.userInfo}>Location: <Text style={styles.userInfoInput}>23 Marlow Drive</Text></Text>
            <Text style={styles.userInfo}>Favourite Team: <Text style={styles.userInfoInput}>Pittsburgh Steelers</Text></Text>
            <Text style={styles.userInfo}>Total Wins: <Text style={styles.userInfoInput}>18</Text></Text>
            <Text style={styles.userInfo}>Last Game: <Text style={styles.userInfoInput}>Steelers vs. Patriots @ John's Pub</Text></Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity style={styles.logoutButton} onPress={() => this.props.navigation.navigate('Welcome')} >
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>

        </View>






        {/* <Button title="Pick an image from camera roll" onPress={this._pickImage} />
        <Button title="Take a Picture" onPress={this._takeImage} /> */}

      </View>
    );
  }


}