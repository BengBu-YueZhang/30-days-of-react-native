import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import OpeningAnimation from './OpeningAnimation'
import { View, ScrollView, RefreshControl, Image } from 'react-native'
import { width, height } from '../../../util/dimensions'

class Page1 extends React.Component {

  constructor (props) {
    super(props)
    this.oa = null
    this.state = {
      refreshing: false
    }
  }

  static navigationOptions = {
    headerTitle: (
      <Icon
        name="twitter"
        size={36}
        color={'#1ba1f1'}
      />
    )
  }

  componentDidMount () {
    this.oa.handleAnimationStart()
  }

  _onRefresh = () => {}

  render () {
    return (
      <View>
        <OpeningAnimation ref={(oa) => { this.oa = oa }} />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
          <Image
            source={require('../../../assets/day3.png')}
            style={{
              width: width,
              height: height - 300
            }}
          />
          <Image
            source={require('../../../assets/day3.png')}
            style={{
              width: width,
              height: height - 300
            }}
          />
        </ScrollView>
      </View>
    )
  }
}

export default Page1