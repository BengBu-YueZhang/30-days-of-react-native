import React from 'react'
import { View, ScrollView, StyleSheet, Text, Button } from 'react-native'
import { Map, List } from 'immutable'
import { SafeAreaView } from 'react-navigation'

const DAYS = List([
  Map({
    title: 'Day1',
    path: 'Day1'
  }),
  Map({
    title: 'Day2',
    path: 'Day2'
  }),
  Map({
    title: 'Day3',
    path: 'Day3'
  })
])

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  block: {
    width: '33.33333%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#ccc',
    borderTopWidth: 0,
    borderLeftWidth: 0
  },
  text: {
    lineHeight: 30
  }
})

class HomeScreen extends React.Component {

  render () {
    const { navigate } = this.props.navigation
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.root  }>
            {
              DAYS.map((day, index) => {
                return (
                  <View style={styles.block} key={index}>
                    <Button
                      style={styles.text}
                      title={day.get('title')}
                      onPress={() => navigate(day.get('path'))}
                    />
                  </View>
                )
              })
            }
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default HomeScreen