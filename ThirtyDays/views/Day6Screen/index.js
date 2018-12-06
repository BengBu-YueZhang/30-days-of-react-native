import React from 'react'
import { View, PanResponder, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation'

class Day6Screen extends React.Component {
}

const Day6Stack = createStackNavigator(
  {
    Day5: Day6Screen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
)

export default Day6Stack
