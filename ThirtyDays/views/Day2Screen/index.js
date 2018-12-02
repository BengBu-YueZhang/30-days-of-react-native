import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { View, Text, ScrollView } from 'react-native'

class Day2Screen extends React.Component {
  render () {
    return (
      <View></View>
    )
  }
}

const Day2Stack = createStackNavigator(
  {
    Day2: Day2Screen
  }
)

export default Day2Screen
