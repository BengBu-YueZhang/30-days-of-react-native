import React from 'react'
import Menu from './Menu'
import {
  View,
  StyleSheet,
  TouchableHighlight
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

  constructor (props) {
    super(props)
    this.state = {
      modalVisible: false
    }
  }

  handlePress = () => {
    this.setState((prevState) => {
      return {
        modalVisible: !prevState.modalVisible
      }
    })
  }

  render () {
    return (
      <TouchableHighlight
        onPress={this.handlePress}
      >
        <View style={styles.root}>
          
            <Icon
              name="bell"
              color="#F8F8F8"
              size={20}
            />
          
          <Menu modalVisible={this.state.modalVisible}/>
        </View>
      </TouchableHighlight>
    )
  }
}

export default MenuButton