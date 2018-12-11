import React from 'react'
import {
  View,
  StyleSheet,
  Animated,
  Modal,
  Text
} from 'react-native'
import PropTypes from 'prop-types'

console.log(VibrancyView)

const styles = StyleSheet.create(
  {
    root: {
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.8)'
    }
  }
)

class Menu extends React.Component {
  render () {
    const { modalVisible } = this.props
    return (
      <Modal
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.root}></View>
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
