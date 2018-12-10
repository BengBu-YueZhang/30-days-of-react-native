import React from 'react'
import {
  Image,
  StyleSheet,
  StatusBar,
  CameraRoll,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  KeyboardAvoidingView,
  Button
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  textArea: {
    flex: 1,
    padding: 15,
    fontSize: 20
  }
})

class Day7Screen extends React.Component {

  constructor (props) {
    super(props)
    this.textArea = null
  }

  render () {
    return (
      <KeyboardAvoidingView>
        <View style={styles.container}>
          <TextInput
            autoFocus={true}
            style={styles.textArea}
            multiline={true}
            placeholder={'分享生活点滴'}
            selectionColor="#2aa2ef"
            placeholderTextColor="#ced8de"
            ref="textarea"
          />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

class HeaderLeft extends React.Component {
  render () {
    return (
      <Button
        onPress={() => {
          navigation.navigate('Home')
        }}
        color={'#aed581'}
        title={'发布'}/>
    )
  }
}

class HeaderRight extends React.Component {
  render () {
    const { navigation } = this.props
    return (
      <Button
        onPress={() => {
          navigation.navigate('Home')
        }}
        color={'#424242'}
        title={'取消'}
      />
    )
  }
}

const Day7Stack = createStackNavigator(
  {
    Day7: {
      screen: Day7Screen,
      navigationOptions: ({ navigation }) => {
        return {
          headerRight: <HeaderLeft/>,
          headerLeft: <HeaderRight navigation={navigation}/>
        }
      }
    }
  }
)

export default Day7Stack