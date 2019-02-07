import React from 'react'
import { Animated, PanResponder, View, Text, StyleSheet, LayoutAnimation } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Menu from './components/Menu'
import { width, height } from '../../util/dimensions'

/**
 * https://github.com/react-navigation/react-navigation/issues/363
 * https://medium.com/@spencer_carli
 */

const styles = StyleSheet.create(
  {
    root: {
      width: '100%',
      minHeight: '100%',
      backgroundColor: '#fff'
    },
    menuWrapper: {
      position: 'absolute',
      top: 0,
      left: -width * 0.7 - 10,
      width: width * 0.7 + 20,
      height,
      backgroundColor: 'transparent',
      zIndex: 9,
    },
    mask: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor:"rgba(0,0,0,0.6)",
      opacity: 0,
      zIndex: 1
    }
  }
)

const MIN_LEFT = -width * 0.7 - 10
const MAX_LEFT = 0
const MIN_OPACITY = 0
const MAX_OPACITY = 1

class Day5Screen extends React.Component {

  constructor (props) {
    super(props)
    this.panResponder = null
    this.initLeft = MIN_LEFT
    this.initOpacity = MIN_OPACITY
    this.menu = null
    this.mask = null
    this.maskStyles = {
      style: {
        opacity: this.initOpacity
      }
    }
    this.menuStyles = {
      style: {
        left: this.initLeft
      }
    }
    this.state = {
      showDrap: false
    }
    this.initPanResponder()
  }

  endMove = (evt, gestureState) => {
    if (gestureState.dx > 0 || gestureState.vx > 0) {
      this.initLeft = MAX_LEFT
      this.initOpacity = MAX_OPACITY
      this.maskStyles.style.opacity = this.initOpacity
      this.menuStyles.style.left = this.initLeft
    }
    if (gestureState.dx < 0 || gestureState.vx < 0) {
      this.initLeft = MIN_LEFT
      this.initOpacity = MIN_OPACITY
      this.maskStyles.style.opacity = this.initOpacity
      this.menuStyles.style.left = this.initLeft
    }
    LayoutAnimation.linear()
    this.updateStyle()
  }

  updateStyle = () => {
    if (this.menu) {
      this.menu.setNativeProps(this.menuStyles)
    }
    if (this.mask) {
      this.mask.setNativeProps(this.maskStyles)
    }
  }

  initPanResponder = () => {
    this.panResponder = PanResponder.create(
      {
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
        onPanResponderGrant: (evt, gestureState) => {
          this.setState({
            showDrap: true
          })
        },
        onPanResponderMove: (evt, gestureState) => {
          this.menuStyles.style.left = this.initLeft + gestureState.dx
          this.maskStyles.style.opacity = ((-MIN_LEFT - Math.abs(this.menuStyles.style.left)) / -MIN_LEFT)
          console.log(this.maskStyles.style.opacity)
          if (this.menuStyles.style.left > MAX_LEFT) {
            this.menuStyles.style.left = MAX_LEFT
            this.maskStyles.style.opacity = MAX_OPACITY
          }
          if (this.menuStyles.style.left < MIN_LEFT) {
            this.menuStyles.style.left = MIN_LEFT
            this.maskStyles.style.opacity = MIN_OPACITY
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
      >
        {
          this.state.showDrap && <View
            ref={mask => this.mask = mask}
            style={styles.mask}>
          </View>
        }
        <View
          style={styles.menuWrapper}
          {...this.panResponder.panHandlers}
          ref={menu => this.menu = menu}>
          <Menu/>
        </View>
      </View>
    )
  }
}

const Day5Stack = createStackNavigator(
  {
    Day5: Day5Screen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
)

export default Day5Stack