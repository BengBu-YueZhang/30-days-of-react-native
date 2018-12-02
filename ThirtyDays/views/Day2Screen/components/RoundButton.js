import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create(
  {
    root: {
      width: 100,
      height: 100,
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 50
    },
    content: {
      fontSize: 16,
      fontWeight: '100'
    }
  }
)

class RoundButton extends React.Component {

  handlePress = () => {
  }

  render () {
    const { title } = this.props
    return (
      <TouchableOpacity
        onPress={this.handlePress}
        style={styles.root}
      >
        <Text style={styles.content}>{ title }</Text>
      </TouchableOpacity>
    )
  }
}

export default RoundButton