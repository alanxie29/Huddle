import React from "react";
import { ImagePicker, Location, Permissions } from "expo";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

export default class Profile extends React.Component {
  state = {
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    locationResult: null,
    CameraRollPermission: null,
    CameraPermission: null,
    userDetails: {
      email: "",
      favouriteTeam: "",
      wins: null,
      previousGame: "",
      firstName: "",
      lastName: "",
      winPercentage: null,
      gamesPlayed: null
    }
  };

  componentDidMount() {
    this._getLocationAsync();
    this.getUserData();
  }

  getUserData = async () => {
    event.preventDefault();
    // await axios.post('localhost:8081/profile')

    await axios
      .get("localhost:8081/profile")
      .then(response => {
        this.setState({ userDetails: response});
      })
      .catch(error => {
        alert(error, "error fetching user profile.");
      });
  };

  _getLocationAsync = async () => {
    let result = await Location.getCurrentPositionAsync({
      accuracy: 1
    });
    const latitude = result.coords.latitude;
    const longitude = result.coords.longitude;

    let location = await Location.reverseGeocodeAsync({ latitude, longitude });

    const address =
      location[0].name + ", " + location[0].city + ", " + location[0].country;

    this.setState({ locationResult: address });
  };

  _pickImage = async () => {
    let { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== "granted") {
      this.setState({
        CameraRollPermission: "Permission to access Camera Roll was denied"
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
    if (status !== "granted") {
      this.setState({
        CameraPermission: "Permission to access Camera was denied"
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

  _removeImage = async () => {
    this.setState({
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    });
  };

  render() {
    let { image } = this.state;
    const styles = {
      container: {
        marginBottom: "auto",
        flex: 1,
        alignItems: "center",
        backgroundColor: "#272727"
      },
      Holder: {
        paddingVertical: 20,
        marginTop: 30,
        width: 340,
        height: 600
      },
      name: {
        textAlign: "center",
        fontFamily: "OpenSans-Light",
        color: "white",
        fontSize: 30
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
        borderWidth: 1,
        borderColor: "#FFDC7F",
        borderRadius: 50,
        height: 50,
        width: 50,
        alignItems: "center"
      },
      icon: {
        color: "#FFDC7F"
      },
      infoContainer: {
        textAlign: "left",
        paddingHorizontal: 14,
        paddingVertical: 10
      },
      userInfo: {
        fontFamily: "OpenSans-Regular",
        fontSize: 16,
        color: "white",
        marginVertical: 10
      },
      userInfoInput: {
        fontFamily: "OpenSans-Light",
        color: "#ccc"
      },
      logoutButton: {
        width: 120,
        height: 40,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e74c3c"
      },
      logoutText: {
        fontFamily: "OpenSans-Light",
        fontSize: 16,
        color: "white"
      }
    };
    return (
      <View style={styles.container}>
        <View style={styles.Holder}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.name}>Bill Sheng</Text>
            {image && <Image source={{ uri: image }} style={styles.image} />}
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.cameraButton}
                onPress={this._takeImage}
              >
                <Ionicons name="ios-camera" size={30} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cameraButton}
                onPress={this._pickImage}
              >
                <Ionicons name="ios-images" size={30} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cameraButton}
                onPress={this._removeImage}
              >
                <Ionicons name="ios-close" size={30} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.userInfo}>
              Email:{" "}
              <Text style={styles.userInfoInput}>billxsheng@gmail.com</Text>
            </Text>
            <Text style={styles.userInfo}>
              Location:{" "}
              <Text style={styles.userInfoInput}>
                {this.state.locationResult}
              </Text>
            </Text>
            <Text style={styles.userInfo}>
              Favourite Team:{" "}
              <Text style={styles.userInfoInput}>Pittsburgh Steelers</Text>
            </Text>
            <Text style={styles.userInfo}>
              Total Wins: <Text style={styles.userInfoInput}>18</Text>
            </Text>
            <Text style={styles.userInfo}>
              Last Game:{" "}
              <Text style={styles.userInfoInput}>
                Steelers vs. Patriots @ John's Pub
              </Text>
            </Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={() => this.props.navigation.navigate("Welcome")}
            >
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
