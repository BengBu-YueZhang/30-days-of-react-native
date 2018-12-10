import React from 'react'
import { View,
  FlatList,
  StyleSheet,
  CameraRoll,
  Image,
  Platform
} from 'react-native'
import _ from 'lodash'

const styles = StyleSheet.create(
  {
  }
)

class Photo extends React.Component {
  render () {
    return (
      <View></View>
    )
  }
}

class Album extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dataSource: [],
      assets: [], //全部的图片的数据
      lastCursor: null, // 最后的位置
      noMorePhotos: false, // 没有更多的图片了
      loadingMore: false,
    }
  }

  componentDidMount () {
    this.loadPhotos()
  }

  loadPhotos = () => {
    const fetchParams = {
      first: 35,
      groupTypes: 'SavedPhotos',
      assetType: 'Photos',
    };
  
    if (Platform.OS === 'android') {
      delete fetchParams.groupTypes
    }
  
    if (this.state.lastCursor) {
      fetchParams.after = this.state.lastCursor
    }

    CameraRoll.getPhotos(fetchParams).then((data) => {
      this.appendAssets(data)
    })
  }

  tryPhotoLoad = () => {
    if (!this.state.loadingMore) {
      this.setState({
        loadingMore: true
      }, () => {
        this.loadPhotos()
      })
    }
  }

  appendAssets = (data) => {
    const assets = data.edges

    const nextState = {
      loadingMore: false,
    }

    if (!data.page_info.has_next_page) {
      nextState.noMorePhotos = true
    }

    if (assets.length > 0) {
      nextState.lastCursor = data.page_info.end_cursor
      nextState.assets = this.state.assets.concat(assets)
      nextState.dataSource = _.chunk(nextState.assets, 3)
    }

    this.setState(nextState, () => {
      this.endReached()
    })
  }

  endReached = () => {
    if (!this.state.noMorePhotos) {
      this.tryPhotoLoad()
    }
  }

  static navigationOptions = {
    title: '相册'
  }

  render () {
    return (
      <View></View>
    )
  }
}

export default Album