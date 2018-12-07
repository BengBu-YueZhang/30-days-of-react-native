import React from 'react'
import { View, PanResponder, StyleSheet, Text } from 'react-native'
import { createStackNavigator } from 'react-navigation'
// import RnC from './components/RnC'
// import RnD from './components/RnD'
// import randomcolor from 'randomcolor'
// import uuid from 'uuid/v1'

const styles = StyleSheet.create(
  {
    root: {
      width: '100%',
      height: 60,
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
)

class Day6Screen extends React.Component {

  constructor (props) {
    super(props)
  }

  componentDidMount () {
  }

  render () {
    return (
      <View style={{paddingTop: 20}}>
        <Text>123</Text>
      </View>
    )
  }
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
