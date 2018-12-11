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
      animation: new Animated.Value(1)
    }
  }

  render () {
    const { modalVisible } = this.props
    return (
      <Modal
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.root}>
          <View style={styles.content}>
            <View style={styles.button}>
              <Image style={styles.icon} source={require('../../../assets/tumblr-audio.png')}/>
              <Text style={styles.buttonText}>Audio</Text>
            </View>
            <View style={styles.button}>
              <Image style={styles.icon} source={require('../../../assets/tumblr-chat.png')}/>
              <Text style={styles.buttonText}>Chat</Text>
            </View>
            <View style={styles.button}>
              <Image style={styles.icon} source={require('../../../assets/tumblr-link.png')}/>
              <Text style={styles.buttonText}>Link</Text>
            </View>
            <View style={styles.button}>
              <Image style={styles.icon} source={require('../../../assets/tumblr-photo.png')}/>
              <Text style={styles.buttonText}>Photo</Text>
            </View>
            <View style={styles.button}>
              <Image style={styles.icon} source={require('../../../assets/tumblr-quote.png')}/>
              <Text style={styles.buttonText}>Quote</Text>
            </View>
            <View style={styles.button}>
              <Image style={styles.icon} source={require('../../../assets/tumblr-text.png')}/>
              <Text style={styles.buttonText}>Text</Text>
            </View>
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
