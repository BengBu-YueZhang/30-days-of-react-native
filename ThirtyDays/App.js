import React from 'react'
import HomeScreen from './views/HomeScreen'
import Day1Stack from './views/Day1Screen'
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation'


const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    }
  },
  {
    defaultNavigationOptions: {
      headerTitle: '30天学习ReactNative'
    }
  }
)

const RootStack = createStackNavigator(
  {
    Home: HomeStack,
    Day1: Day1Stack
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      header: null
    }
  }
)

const AppContainer = createAppContainer(RootStack)

export default class App extends React.Component {
  render() {
    return <AppContainer/>
  }
}
