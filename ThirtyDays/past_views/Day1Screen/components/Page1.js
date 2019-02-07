import React from 'react'
import { Button } from 'react-native'
import { SafeAreaView } from 'react-navigation'

class Page1 extends React.Component {
  render () {
    const { navigate } = this.props.navigation
    return (
      <SafeAreaView>
        <Button
          onPress={() => navigate('Home')}
          title={'返回'}/>
      </SafeAreaView>
    )
  }
}

export default Page1