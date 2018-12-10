import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import {
  Image,
  StyleSheet,
  CameraRoll,
  Text,
  TouchableHighlight,
  View,
  Button,
  KeyboardAvoidingView
} from 'react-native'
import { withNavigation } from 'react-navigation'

const styles = StyleSheet.create(
  {
    wrapper: {
      padding: 10,
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row'
    },
    addButton: {
      width: 100,
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#eeeeee',
      borderRadius: 8
    },
    add: {
      fontSize: 36,
      color: '#9e9e9e'
    },
    newPhoto: {
      width: 80,
      height: 100,
      backgroundColor: '#eeeeee',
      marginLeft: 20,
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'column',
      borderRadius: 8
    },
    newPhotoText: {
      lineHeight: 30,
      color: '#9e9e9e',
      fontSize: 12
    },
    newPhotoImageWrapper: {
      width: 64,
      height: 64,
      borderRadius: 8,
      overflow: 'hidden'
    },
    newPhotoImage: {
      width: 64,
      height: 64
    }
  }
)

class AlbumSelect extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      images: [],
      newPhoto: {}
    }
  }

  componentDidMount () {
    this.getNewPhoto()
  }

  getNewPhoto = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'Photos',
    })
    .then(r => {
      // console.log(r)
      if (r && r.edges && r.edges.length) {
        this.setState({
          newPhoto: r.edges[0].node
        })
      }
    })
  }

  openAlbum = () => {
    this.props.navigation.navigate('Album')
  }

  render () {
    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={64}
        style={{position: 'absolute', left: 0, right: 0, bottom: 0}}
        behavior="position">
        <View style={styles.wrapper}>
          <TouchableHighlight
            onPress={this.openAlbum}
            style={styles.addButton}>
            <Text style={styles.add}>+</Text>
          </TouchableHighlight>
          {
            (this.state.newPhoto && this.state.newPhoto.image && this.state.newPhoto.image.uri && this.state.images.length === 0) && <View style={styles.newPhoto}>
              <Text style={styles.newPhotoText}>最新照片</Text>
              <View style={styles.newPhotoImageWrapper}>
                <Image
                  style={styles.newPhotoImage}
                  source={{
                    uri: this.state.newPhoto.image.uri
                  }}
                />
              </View>
            </View>
          }
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default withNavigation(AlbumSelect)