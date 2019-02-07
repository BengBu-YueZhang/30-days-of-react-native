import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import YueYueButton from '../../components/YueYueButton'

const days = [
  { title: 'Day1', icon: 'alarm', path: 'Day1' }
]

class Home extends React.Component {
  render () {
    const { navigate } = this.props.navigation
    return (
      <SafeAreaView>
        <ScrollView>
          {
            days.length > 0 && days.map((day, index) => {
              return (
                <View key={index}>
                  <YueYueButton
                    text={day.title}
                    flat={true}
                  />
                </View>
              )
            })
          }
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default Home