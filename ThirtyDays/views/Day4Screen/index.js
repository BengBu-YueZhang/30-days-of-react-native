import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Ball from './components/Ball'

const styles = StyleSheet.create(
  {
    root: {
      width: '100%',
      height: '100%'
    }
  }
)

class Day4Screen extends React.Component {
  render () {
    return (
      <ImageBackground style={styles.root} source={require('../../assets/agrass.png')}>
        <Ball></Ball>
      </ImageBackground>
    )
  }
}

const Day4Stack = createStackNavigator(
  {
    Day4: Day4Screen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
)

export default Day4Stack
