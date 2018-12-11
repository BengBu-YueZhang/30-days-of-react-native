import React from 'react'
import {
  View,
  StyleSheet,
  Animated,
  Modal,
  Text,
  Image
} from 'react-native'
import PropTypes from 'prop-types'
import {width} from '../../../util/dimensions'


const styles = StyleSheet.create(
  {
    root: {
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    content: {
      width: 300,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    icon: {
      width: 110,
      height: 110
    },
    button: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginBottom: 10,
      padding: 20
    },
    buttonText: {
      color: '#fff',
      lineHeight: 24,
      fontSize: 14
    }
  }
)

class Menu extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      animation: new Animated.Value(0)
    }
  }

  componentDidMount () {
    Animated.timing(
      this.state.animation,
      {
        delay: 1000,
        toValue: 1,
        duration: 500
      }
    )
  }

  handleShow = () => {
  }

  handleDismiss = () => {
  }

  render () {
    const { modalVisible } = this.props
    return (
      <Modal
        onShow={this.handleShow}
        onDismiss={this.handleDismiss}
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.root}>
          <View style={styles.content}>
            <Animated.View style={{
              ...styles.button,
              transform: [{
                translateX: this.state.animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -width]
                })
              }]
            }}>
              <Image style={styles.icon} source={require('../../../assets/tumblr-audio.png')}/>
              <Text style={styles.buttonText}>Audio</Text>
            </Animated.View>
            <Animated.View style={{
              ...styles.button,
              transform: [{
                translateX: this.state.animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, width]
                })
              }]
            }}>
              <Image style={styles.icon} source={require('../../../assets/tumblr-chat.png')}/>
              <Text style={styles.buttonText}>Chat</Text>
            </Animated.View>
            <Animated.View style={{
              ...styles.button,
              transform: [{
                translateX: this.state.animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -width]
                })
              }]
            }}>
              <Image style={styles.icon} source={require('../../../assets/tumblr-link.png')}/>
              <Text style={styles.buttonText}>Link</Text>
            </Animated.View>
            <Animated.View style={{
              ...styles.button,
              transform: [{
                translateX: this.state.animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, width]
                })
              }]
            }}>
              <Image style={styles.icon} source={require('../../../assets/tumblr-photo.png')}/>
              <Text style={styles.buttonText}>Photo</Text>
            </Animated.View>
            <Animated.View style={{
              ...styles.button,
              transform: [{
                translateX: this.state.animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -width]
                })
              }]
            }}>
              <Image style={styles.icon} source={require('../../../assets/tumblr-quote.png')}/>
              <Text style={styles.buttonText}>Quote</Text>
            </Animated.View>
            <Animated.View style={{
              ...styles.button,
              transform: [{
                translateX: this.state.animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, width]
                })
              }]
            }}>
              <Image style={styles.icon} source={require('../../../assets/tumblr-text.png')}/>
              <Text style={styles.buttonText}>Text</Text>
            </Animated.View>
          </View>
        </View>
      </Modal>
    )
  }
}

Menu.propTypes = {
  modalVisible: PropTypes.bool
}

Menu.defaultProps = {
  modalVisible: true
}

export default Menu
