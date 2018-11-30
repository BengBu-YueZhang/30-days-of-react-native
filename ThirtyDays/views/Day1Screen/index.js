import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import React from 'react'
import AddButton from './components/AddButton'

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
    Adding: {
      screen: () => null,
      tabBarIcon: <AddButton/>
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