import React from 'react'
import Menu from './Menu'
import {
  View,
  StyleSheet,
  Modal
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const styles = StyleSheet.create(
  {
    root: {
      width: 48,
      height: 34,
      backgroundColor: '#2196f3',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5
    },
    text: {
    }
  }
)

class MenuButton extends React.Component {
  render () {
    return (
      <View style={styles.root}>
        <Icon
          name="bell"
          color="#171F33"
          size={20}
        />
        <Menu/>
      </View>
    )
  }
}

export default MenuButton