import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import { Text, View } from 'react-native';
import Login from './src/components/Auth/Login/Login';
import SignUp from './src/components/Auth/SignUp/SignUp';
import Home from './src/components/HomeComponent/Home/Home';
import Profile from './src/components/ProfileComponent/Profile/Profile'
import Welcome from './src/components/Auth/Welcome/Welcome';
import Hub from './src/components/HubComponent/Hub/Hub';
import { Font } from 'expo';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class App extends Component {
<<<<<<< HEAD

  render() {
    return (
      <AppContainer/>

=======
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'OpenSans-Light': require('./src/assets/fonts/OpenSans-Light.ttf'),
      'OpenSans-Regular': require('./src/assets/fonts/OpenSans-Regular.ttf'),
      'OpenSans-SemiBold': require('./src/assets/fonts/OpenSans-SemiBold.ttf'),
      'OpenSans-Bold': require('./src/assets/fonts/OpenSans-Bold.ttf'),
      'OpenSans-ExtraBold': require('./src/assets/fonts/OpenSans-ExtraBold.ttf'),
      'ionicons': require('./src/assets/fonts/Ionicons.ttf')
    }
    );
    this.setState({ fontLoaded: true });
  }

  render() {
    return (

      this.state.fontLoaded ? (
        <AppContainer />
      ) : null
>>>>>>> patrick
    )
  }

}


const AuthStack = createStackNavigator(
  {
    Login: Login,
    SignUp: SignUp,
    Welcome: Welcome,
  },
  {
    initialRouteName: "Welcome"
  }
);

const HomeStack = createStackNavigator(
  {
    Home: Home,
  }
)

const HubStack = createStackNavigator(
  {
    Hub: Hub
  }
)

const ProfileStack = createStackNavigator(
  {
    Profile: Profile
  }
)

const AppStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        // tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='home-outline' size={30} style={{ color: tintColor}} />
      }
    },
    Hub: {
      screen: HubStack,
      navigationOptions: {
        // tabBarIcon: ({ tintColor }) => <FontAwesome5 name='football-ball' size={22} style={{ color: tintColor }} />
      }
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        // tabBarIcon: ({ tintColor }) => <FontAwesome5 name='user' size={28} style = {{ color: tintColor }} />
      }
    }
  },
  {
    tabBarOptions:
    {
      activeTintColor: 'black',
      inactiveTintColor: '#686868',
      style: {
        height: '10%',
      }
    },
  }
)


const AppContainer = createAppContainer(createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'Auth'
  }
));



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});