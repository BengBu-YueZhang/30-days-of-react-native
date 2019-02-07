import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import React from 'react'

const colors = {
  info: '#2196f3',
  success: '#66bb6a',
  warning: '#ffca28',
  error: '#e53935'
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  button: {
    padding: 10
  },
  text: {
    fontWeight: '500',
    textAlign: 'center'
  }
})

class YueYueButton extends React.Component {
  render () {
    const { style, text, type, flat, onPress } = this.props
    const buttonStyle = {
      backgroundColor: !flat ? colors[type] : '#fff',
      ...styles.button,
      ...style
    }
    const textStyle = {
      ...styles.text,
      color: flat ? colors[type] : '#fff'
    }
    return (
      <View style={styles.container}>
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
          <Text style={textStyle}>{ text }</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

YueYueButton.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  style: PropTypes.object,
  flat: PropTypes.bool,
  fab: PropTypes.bool,
  onPress: PropTypes.func
}

YueYueButton.defaultProps = {
  text: '',
  type: 'info',
  size: 'normal',
  style: {},
  flat: false,
  fab: false,
  onPress: () => {}
}

export default YueYueButton
