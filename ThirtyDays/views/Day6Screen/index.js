import React from 'react'
import { View, PanResponder, StyleSheet, Text } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import RnDnD from './RnDnD'
import uuid from 'uuid/v1'
import color from 'randomcolor'

const styles = StyleSheet.create(
  {
    root: {
      width: '100%',
      height: 60,
      justifyContent: 'center',
      alignItems: 'center'
    },
    brick: {
      width: '100%',
      height: 60,
      color: '#fff',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row'
    },
    brickText: {
      color: '#fff'
    }
  }
)

class Brick extends React.Component {
  render () {
    const { color, title } = this.props
    return (
      <View style={{
        ...styles.brick,
        backgroundColor: color
      }}>
        <Text style={styles.brickText}>{title}</Text>
      </View>
    )
  }
}

class Day6Screen extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      list: [
        {
          title: 'React',
          color: color(),
          id: uuid()
        },
        {
          title: 'Redux',
          color: color(),
          id: uuid()
        },
        {
          title: 'Mobx',
          color: color(),
          id: uuid()
        },
        {
          title: 'Vue',
          color: color(),
          id: uuid()
        },
        {
          title: 'Vuex',
          color: color(),
          id: uuid()
        }
      ]
    }
  }

  render () {
    return (
      <View>
        <RnDnD
          data={this.state.list}
          template={props => <Brick {...props}/>}
        />
      </View>
    )
  }
}

const Day6Stack = createStackNavigator(
  {
    Day5: Day6Screen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
)

export default Day6Stack
