import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import OpeningAnimation from './OpeningAnimation'
import { View } from 'react-native'


class Page1 extends React.Component {
  static navigationOptions = {
    headerTitle: (
      <Icon
        name="twitter"
        size={36}
        color={'#1ba1f1'}
      />
    )
  }

  render () {
    return (
      <View>
        <OpeningAnimation/>
      </View>
    )
  }
}

export default Page1