import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import Login from './src/components/Auth/Login/Login';
import SignUp from './src/components/Auth/SignUp/SignUp';
import Home from './src/components/HomeComponent/Home/Home';
import Profile from './src/components/ProfileComponent/Profile/Profile'
import Welcome from './src/components/Auth/Welcome/Welcome';
import Games from './src/components/HubComponent/Games/Games';
import Venues from './src/components/HubComponent/Venues/Venues';
import { Font, Asset, AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import AuthLoading from './src/components/AuthLoading/AuthLoading'



// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class App extends Component {
  state = {
    fontLoaded: false,
    isReady: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'OpenSans-Light': require('./src/assets/fonts/OpenSans-Light.ttf'),
      'OpenSans-Regular': require('./src/assets/fonts/OpenSans-Regular.ttf'),
      'OpenSans-SemiBold': require('./src/assets/fonts/OpenSans-SemiBold.ttf'),
      'OpenSans-Bold': require('./src/assets/fonts/OpenSans-Bold.ttf'),
      'OpenSans-ExtraBold': require('./src/assets/fonts/OpenSans-ExtraBold.ttf'),
      'ionicons': require('./src/assets/fonts/Ionicons.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
        startAsync={this._cacheResourcesAsync}
        onFinish={() => this.setState({ isReady: true })}
        onError={console.warn} />
      )
    
    }
    return (
      this.state.fontLoaded ? (
        <AppContainer />
      ) : null
    )
  }

  async _cacheResourcesAsync() {
    const images = [
      require('./src/assets/images/splash.png')
    ];
  
  
  const cacheImages = images.map((image) => {
    return Asset.fromModule(image).downloadAsync();
  });
  return Promise.all(cacheImages);
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

const HubStack = createMaterialTopTabNavigator(
  {
    Games: {
      screen: Games,
      navigationOptions: {
        // icons go here
      }
    },
    Venues: {
      screen: Venues,
      navigationOptions: {
        // icons go here
      }
    }
  },
  {
    tabBarOptions:
    {
      activeTintColor: '#272727',
      inactiveTintColor: '#ccc',
      lazy: false,
      showIcon: true,
      labelStyle: {
        color: 'black',
        marginTop: 65
      },
      style: {
        height: '15%',
        backgroundColor: '#ffdc7f'
      },
      indicatorStyle: {
        backgroundColor: '#272727',
      }
    },
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
        tabBarIcon: ({ tintColor }) => <Ionicons name='ios-home' size={28} style={{ color: tintColor }} />
        // tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='home-outline' size={30} style={{ color: tintColor}} />
      }
    },
    Hub: {
      screen: HubStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Ionicons name='ios-american-football' size={28} style={{ color: tintColor }} />
        // tabBarIcon: ({ tintColor }) => <FontAwesome5 name='football-ball' size={22} style={{ color: tintColor }} />
      }
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Ionicons name='ios-contact' size={28} style={{ color: tintColor }} />
        // tabBarIcon: ({ tintColor }) => <FontAwesome5 name='user' size={28} style = {{ color: tintColor }} />
      }
    }
  },
  {
    tabBarOptions:
    {
      activeTintColor: '#272727',
      inactiveTintColor: '#ccc',
      style: {
        height: '8%',
      }
    },
  }
)


const AppContainer = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoading, 
    App: AppStack,
    Auth: AuthStack,
    Hub: HubStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
));

