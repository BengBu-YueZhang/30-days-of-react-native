import Swiper from 'react-native-swiper'
import React from 'react'
import { ScrollView, View } from 'react-native'
import { createStackNavigator } from 'react-navigation'

class Day3Screen extends React.Component {
  render () {
    return null
  }
}

const Day3Stack = createStackNavigator(
  {
    Day3: Day3Screen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
)

export default Day3Stack
