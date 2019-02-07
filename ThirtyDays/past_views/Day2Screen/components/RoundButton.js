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
    const { title } = this.props
    this.props.onPress(title)
  }

  render () {
    const { title } = this.props
    let color = '#212121'
    if (title === '启动') {
      color = '#7cb342'
    } else if (title === '停止') {
      color = '#e53935'
    }
    return (
      <TouchableOpacity
        onPress={this.handlePress}
        style={styles.root}
      >
        <Text style={{...styles.content, color}}>{ title }</Text>
      </TouchableOpacity>
    )
  }
}

export default RoundButton