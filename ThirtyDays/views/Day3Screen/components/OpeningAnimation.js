import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Animated, StyleSheet, Modal } from 'react-native'
import { width, height } from '../../../util/dimensions'

const styles = StyleSheet.create(
  {
    root: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      width: width,
      height: height,
      backgroundColor: '#1ba1f1',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
)

const AnimatedIcon = Animated.createAnimatedComponent(Icon)
const AnimatedModal = Animated.createAnimatedComponent(Modal)

class OpeningAnimation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      animation: new Animated.Value(1),
      visible: true
    }
  }

  handleAnimationStart () {
    Animated.timing(
      this.state.animation,
      {
        delay: 1000,
        toValue: 0,
        duration: 500
      }
    ).start(() => {
      this.setState({
        visible: false
      })
    })
  }

  render () {
    return (
      <AnimatedModal visible={this.state.visible}>
        <Animated.View style={{
          ...styles.root,
          opacity: this.state.animation
        }}>
          <AnimatedIcon
            name="twitter"
            size={70}
            color={'#fff'}
            style={{
              transform: [{
                scale: this.state.animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [8, 1]
                }),
              }]
            }}
          />
        </Animated.View>
      </AnimatedModal>
    )
  }
}

export default OpeningAnimation