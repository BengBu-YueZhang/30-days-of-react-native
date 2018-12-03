import Icon from 'react-native-vector-icons/Ionicons'
import { View, PanResponder, StyleSheet } from 'react-native'
import React from 'react'
import { width, height } from '../../../util/dimensions'

const styles = StyleSheet.create(
  {
    root: {
      position:"absolute",
      left:0,
      right:0
    }
  }
)

class Ball extends React.Component {

  constructor (props) {
    super(props)
    this.ball = null
    this.ballStyles = {
      style: {
        left: 0,
        top: 0
      }
    }
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
  }

  render () {
    return (
      <View style={styles.root} ref={(ball) => { this.ball = ball }}>
        <Icon name="ios-baseball" color={this.state.color} size={120}></Icon>
      </View>
    )
  }
}

export default Ball