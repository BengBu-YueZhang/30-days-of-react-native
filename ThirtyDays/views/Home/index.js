import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import YueYueButton from '../../components/YueYueButton'

const days = [
  { title: 'Day1', icon: 'alarm', path: 'Day1', color: '#ec407a' }
]

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  },
  itemLeft: {
    width: '33.33333%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#eeeeee',
    borderTopWidth: 0,
    borderLeftWidth: 0
  }
})

class Home extends React.Component {

  handleClick = (path) => {
    const { navigate } = this.props.navigation
    navigate(path)
  }

  render () {
    
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            {
              days.length > 0 && days.map((day, index) => {
                return (
                  <View key={index} style={styles.itemLeft}>
                    <MaterialIcons
                      size={70}
                      name={day.icon}
                      color={day.color}
                    />
                    <YueYueButton
                      text={day.title}
                      flat={true}
                      onPress={() => this.handleClick(day.path)}
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

export default Home