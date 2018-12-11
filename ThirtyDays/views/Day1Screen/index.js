import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import React from 'react'
import { Animated, View, StyleSheet, TouchableHighlight, Text, Button } from 'react-native'

const styles = StyleSheet.create({
  root: {
    position: 'relative',
    width: 80,
    height: 80
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#48A2F8'
  },
  minButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#48A2F8'
  }
})

class AddButton extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      mode: new Animated.Value(0)
    }
  }

  handlePress = () => {
    Animated.timing(
      this.state.mode,
      {
        toValue: this.state.mode._value === 0 ? 1 : 0,
        duration: 500
      }
    ).start()
  }

  render () {

    const firstX = this.state.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [25, -30]
    })

    const firstY = this.state.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [25, -30]
    })

    const secondX = this.state.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [25, 25]
    })

    const secondY = this.state.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [25, -40]
    })

    const thirdX = this.state.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [25, 80]
    })
    
    const thirdY = this.state.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [25, -30]
    })

    const transparent = this.state.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    })

    const rotation = this.state.mode.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '45deg']
    })

    return (
      <View style={styles.root}>
        <Animated.View style={{
          position: 'absolute',
          opacity: transparent,
          left: firstX,
          top: firstY
        }}>
          <TouchableHighlight style={styles.minButton}>
            <Icon name="rocket" size={16} color="#F8F8F8"/>
          </TouchableHighlight>
        </Animated.View>
        <Animated.View style={{
          position: 'absolute',
          opacity: transparent,
          left: secondX,
          top: secondY
        }}>
          <TouchableHighlight style={styles.minButton}>
            <Icon name="home" size={16} color="#F8F8F8"/>
          </TouchableHighlight>
        </Animated.View>
        <Animated.View style={{
          position: 'absolute',
          opacity: transparent,
          left: thirdX,
          top: thirdY
        }}>
          <TouchableHighlight style={styles.minButton}>
            <Icon name="archive" size={16} color="#F8F8F8"/>
          </TouchableHighlight>
        </Animated.View>
        <TouchableHighlight style={styles.button} underlayColor="#2882D8" onPress={this.handlePress}>
          <Animated.View style={{
            transform: [
              {rotate: rotation}
            ]
          }}>
            <Icon name="plus" size={24} color="#F8F8F8"/>
          </Animated.View>
        </TouchableHighlight>
      </View>
    )
  }
}

const Day1Stack = createBottomTabNavigator(
  {
    Page1: {
      screen: Page1,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="bookmark"
            color={tintColor}
            size={24}
          />
        ),
        tabBarLabel: '主页'
      })
    },
    Page2: {
      screen: Page2,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="link"
            color={tintColor}
            size={24}
          />
        ),
        tabBarLabel: '详情'
      })
    },
    Add: {
      screen: Page2,
      navigationOptions: () => ({
        tabBarIcon: () => {
          return (
            <AddButton/>
          )
        }
      })
    },
    Page3: {
      screen: Page3,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="windows"
            color={tintColor}
            size={24}
          />
        ),
        tabBarLabel: '发布'
      })
    },
    Page4: {
      screen: Page4,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="user"
            color={tintColor}
            size={24}
          />
        ),
        tabBarLabel: '我的'
      })
    }
  },
  {
    initialRouteName: 'Page1',
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#F8F8F8',
      inactiveTintColor: '#586589',
      style: {
        backgroundColor: '#171F33'
      }
    }
  }
)

export default Day1Stack