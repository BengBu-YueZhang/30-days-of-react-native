import Icon from 'react-native-vector-icons/Ionicons'
import { View, PanResponder, StyleSheet } from 'react-native'
import React from 'react'
import { width, height } from '../../../util/dimensions'
import { getStatusBarHeight } from 'react-native-status-bar-height'

const styles = StyleSheet.create(
  {
    root: {
      position:"absolute",
      left:0,
      right:0
    }
  }
)

const STATUSBAR_HEIGHT = getStatusBarHeight()
const SIZE = 100
const MAX_TOP = height - SIZE
const MAX_LEFT = width - SIZE
const MIN_TOP = STATUSBAR_HEIGHT
const MIN_LEFT = 0

class Ball extends React.Component {

  constructor (props) {
    super(props)
    this.ball = null
    this.ballStyles = {
      style: {
        left: MIN_LEFT,
        top: MIN_TOP
      }
    }
    this.panResponder = null
    this.state = {
      color: 'rgba(255, 255, 255, 0.7)' 
    }
  }

  componentDidMount () {
    this.initPanResponder()
    this.updateStyle()
  }

  updateStyle () {
    if (this.ball) {
      this.ball.setNativeProps(this.ballStyles)
    }
  }

  endMove () {
  }

  initPanResponder () {
    this.panResponder = PanResponder.create()
  }

  render () {
    return (
      <View style={styles.root} ref={(ball) => { this.ball = ball }} {...this.panResponder.panHandlers}>
        <Icon name="ios-baseball" color={this.state.color} size={SIZE}></Icon>
      </View>
    )
  }
}

export default Ball