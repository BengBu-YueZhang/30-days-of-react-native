import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const days = [
  { title: 'Day1', icon: '', path: 'Day1' }
]

class Home extends React.Component {
  render () {
    // const { navigate } = this.props.navigation
    return (
      <SafeAreaView>
        <View>
          <Text>123</Text>
          <Icon name="person" size={30} color="#4F8EF7" />
        </View>
      </SafeAreaView>
    )
  }
}

export default Home