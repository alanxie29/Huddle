import React from 'react';
import { Button, Image, View } from 'react-native';
import { ImagePicker } from 'expo';

export default class Profile extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      <View>
        <Button title="Pick an image from camera roll" onPress={this._pickImage}/>
        <Button title="Take a Picture" onPress={this._takeImage}/>
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
    );
  }

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

  _takeImage = async() => {
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