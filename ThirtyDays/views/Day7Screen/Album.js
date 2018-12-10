import React from 'react'
import { View, FlatList } from 'react-native'

class Album extends React.Component {
  static navigationOptions = {
    title: '相册'
  }

  render () {
    return (
      <FlatList/>
    )
  }
}

export default Album