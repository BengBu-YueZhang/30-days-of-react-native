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
  Button
} from 'react-native'
import { createStackNavigator } from 'react-navigation'
import AlbumSelect from './components/AlbumSelect'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 15
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
    this.AlbumSelect = null
  }

  render () {
    return (
      <View style={styles.container}>
        <TextInput
          autoFocus={false}
          style={styles.textArea}
          multiline={true}
          placeholder={'分享生活点滴'}
          selectionColor="#2aa2ef"
          placeholderTextColor="#ced8de"
          ref="textarea"
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
        <AlbumSelect ref={AlbumSelect => this.AlbumSelect = AlbumSelect}/>
      </View>
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