import React from 'react'
import HomeScreen from './views/HomeScreen'
import Day1Stack from './views/Day1Screen'
import Day2Stack from './views/Day2Screen'
import Day3Stack from './views/Day3Screen'
import Day4Stack from './views/Day4Screen'
import Day5Stack from './views/Day5Screen'
import Day6Stack from './views/Day6Screen'
import Day7Stack from './views/Day7Screen'
import Day8Stack from './views/Day8Screen'
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation'
import { Provider } from 'react-redux'
import store from './store'
import SplashScreen from 'react-native-splash-screen'

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

const RootStack = createSwitchNavigator(
  {
    Home: HomeStack,
    Day1: Day1Stack,
    Day2: Day2Stack,
    Day3: Day3Stack,
    Day4: Day4Stack,
    Day5: Day5Stack,
    Day6: Day6Stack,
    Day7: Day7Stack,
    Day8: Day8Stack
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

  componentDidMount () {
    setTimeout(() => {
      SplashScreen.hide()
    }, 500)
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    )
  }
}
