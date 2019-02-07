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
    this.initLeft = width / 2 - 50
    this.initTop = height / 2 - 50
    this.ball = null
    this.ballStyles = {
      style: {
        left: this.initLeft,
        top: this.initTop
      }
    }
    this.panResponder = null
    this.state = {
      color: 'rgba(255, 255, 255, 0.7)' 
    }
    this.initPanResponder()
  }

  componentDidMount () {
    this.updateStyle()
  }

  updateStyle () {
    if (this.ball) {
      this.ball.setNativeProps(this.ballStyles)
    }
  }

  endMove (evt, gestureState) {
    this.setState({
      color: 'rgba(255, 255, 255, 0.7)'
    })
    this.initLeft = this.initLeft + gestureState.dx
    this.initTop = this.initTop + gestureState.dy
  }

  initPanResponder () {
    this.panResponder = PanResponder.create(
      {
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
        onPanResponderGrant: (evt, gestureState) => {
          this.setState({
            color: 'rgb(255, 255, 255)'
          })
        },
        onPanResponderMove: (evt, gestureState) => {
          this.ballStyles.style.left = this.initLeft + gestureState.dx
          this.ballStyles.style.top = this.initTop + gestureState.dy
          if (this.ballStyles.style.left < MIN_LEFT) {
            console.log(1)
            this.ballStyles.style.left = MIN_LEFT
          }
          if (this.ballStyles.style.left > MAX_LEFT) {
            console.log(2)
            this.ballStyles.style.left = MAX_LEFT
          }
          if (this.ballStyles.style.top > MAX_TOP) {
            console.log(3)
            this.ballStyles.style.top = MAX_TOP
          }
          if (this.ballStyles.style.top < MIN_TOP) {
            console.log(4)
            this.ballStyles.style.top = MIN_TOP
          }
          this.updateStyle()
        },
        onPanResponderTerminationRequest: (evt, gestureState) => true,
        onPanResponderRelease: (evt, gestureState) => {
          this.endMove(evt, gestureState)
        },
        onPanResponderTerminate: (evt, gestureState) => {
          this.endMove(evt, gestureState)
        },
      }
    )
  }

  render () {
    return (
      <View
        style={styles.root}
        ref={(ball) => { this.ball = ball }}
        {...this.panResponder.panHandlers}
      >
        <Icon name="ios-baseball" color={this.state.color} size={SIZE}></Icon>
      </View>
    )
  }
}

export default Ball