import React from 'react'
import { View,
  FlatList,
  StyleSheet,
  CameraRoll,
  Image,
  Platform
} from 'react-native'
import _ from 'lodash'
import { width } from '../../util/dimensions'

const styles = StyleSheet.create(
  {
    wrapper: {
      flexDirection: 'row'
    },
    Photo: {
      width: width / 4,
      height: width / 4,
      borderColor: '#f5f5f5',
      borderWidth: 1
    }
  }
)

class Photo extends React.Component {
  render () {
    const { photo } = this.props
    return (
      <View style={styles.Photo}>
        <Image
          source={{uri: photo.node.image.uri}}
          style={styles.Photo}/>
      </View>
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
    console.log(this.state.assets)
    if (!this.state.noMorePhotos) {
      this.tryPhotoLoad()
    }
  }

  static navigationOptions = {
    title: '相册'
  }

  render () {
    return (
      <View>
        <FlatList
          numColumns={4}
          style={styles.wrapper}
          data={this.state.assets}
          renderItem={({item}) => <Photo photo={item}/>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
  }
}

export default Album