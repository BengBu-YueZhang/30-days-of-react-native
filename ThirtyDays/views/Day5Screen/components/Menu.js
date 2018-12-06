import React from 'react'
import { Modal, View, StyleSheet, PanResponder } from 'react-native'
import { width, height } from '../../../util/dimensions'

const styles = StyleSheet.create(
  {
    root: {
      width: width * 0.7,
      height,
      backgroundColor: '#fff',
      shadowColor: "#000",
      shadowOpacity: 0.3,
      shadowRadius: 5,
      shadowOffset: {
        height: 0,
        width: 2
      }
    },
    top: {
      width: '100%',
      aspectRatio: 1.2,
      backgroundColor: '#2196f3'
    }
  }
)


class Menu extends React.Component {

  render () {
    return (
      <View
        style={styles.root}
      >
        <View style={styles.top}></View>
        <View></View>
      </View>
    )
  }
}

export default Menu