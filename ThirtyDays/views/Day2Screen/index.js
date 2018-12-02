import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import RoundButton from './components/RoundButton'

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#f5f5f5',
    minHeight: '100%'
  },
  top: {
    width: '100%',
    aspectRatio: 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  topText: {
    fontSize: 60,
    fontWeight: '100'
  },
  middle: {
    width: '100%',
    aspectRatio: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})

class Day2Screen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Stopwatch',
      headerLeft: ({}) => {
        return (
          <Button
            onPress={() => navigation.navigate('Home')}
            title="back"
          />
        )
      }
    } 
  }

  render () {
    return (
      <SafeAreaView>
        <View style={styles.root}>
          <View style={styles.top}>
            <Text style={styles.topText}>
              00:00:00
            </Text>
          </View>
          <View style={styles.middle}>
            <RoundButton
              title={'复位'}
            />
            <RoundButton
              title={'启动'}
            />
          </View>
          <ScrollView></ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}

const Day2Stack = createStackNavigator(
  {
    Day2: Day2Screen
  }
)

export default Day2Stack
