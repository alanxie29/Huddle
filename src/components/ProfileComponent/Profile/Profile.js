import React from 'react';
import { Button, Image, View, Text } from 'react-native';
import { ImagePicker, Location, Permissions } from 'expo';

export default class Profile extends React.Component {
  state = {
    image: ('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'),
    locationResult: null,
    CameraRollPermission: null,
    CameraPermission: null,
  };

  componentDidMount() {
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let result = await Location.getCurrentPositionAsync({
      accuracy: 1
    });
    const latitude = result.coords.latitude;
    const longitude = result.coords.longitude;

    let location = await Location.reverseGeocodeAsync({ latitude, longitude });

    const address = location[0].name + ", " + location[0].city + ", " + location[0].country;

    this.setState({ locationResult: address })
  }


  

  render() {
    let { image } = this.state;
    return (
      <View>
        <Button title="Pick an image from camera roll" onPress={this._pickImage} />
        <Button title="Take a Picture" onPress={this._takeImage} />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        <Text>{this.state.locationResult}</Text>
      </View>
    );
  }

  
  _pickImage = async () => {
    let { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
        this.setState({
            CameraRollPermission: 'Permission to access Camera Roll was denied'
        });
    } else {
        this.setState({ CameraRollPermission: true });
    }
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
    let { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status !== 'granted') {
        this.setState({
            CameraPermission: 'Permission to access Camera was denied'
        });
    } else {
        this.setState({ CameraPermission: true });
    }
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };





}