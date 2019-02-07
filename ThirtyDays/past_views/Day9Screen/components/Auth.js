import React from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import PasswordGesture from 'react-native-gesture-password'

const PASSWORD = '1235789' // Z

const styles = StyleSheet.create(
  {
    root: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 30
    },
    text: {
      fontSize: 30,
      color: 'red',
      lineHeight: 130,
      fontWeight: '200',
      color: '#fff'
    }
  }
)

class Auth extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      status: 'normal',
      message: ''
    }
  }

  onReset = () => {}

  onStart = () => {}

  onEnd = (password) => {
    if (password && password.length < 4) {
      this.setState({
        status: 'wrong',
        message: '最少链接4个点, 请重新输入'
      })
    }
    if (password !== PASSWORD) {
      this.setState({
        status: 'normal',
        message: ''
      }, () => {
        Alert.alert(
          '密码错误',
          '请重新输入',
          [
            {
              text: '确认',
              onPress: () => console.log('OK Pressed'),
              style: "cancel"
            }
          ],
          { cancelable: false }
        )
      })
    } else {
      this.props.navigation.navigate('User')
    }
  }

  render () {
    return (
      <PasswordGesture
        children={
          <View style={styles.root}>
            <Text style={styles.text}>天魂, 您好</Text>
          </View>
        }
        ref='pg'
        interval={4}
        allowCross={false}
        normalColor={'#757575'}
        rightColor={'#4caf50'}
        wrongColor={'#f44336'}
        outerCircle={false}
        status={this.state.status}
        message={this.state.message}
        onStart={this.onStart}
        onReset={this.onReset}
        onEnd={(password) => this.onEnd(password)}
      />
    )
  }
}

export default Auth