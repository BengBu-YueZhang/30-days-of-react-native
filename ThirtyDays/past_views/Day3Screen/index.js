import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'

const Page1Stack = createStackNavigator(
  {
    Page1: {
      screen: Page1
    }
  }
)

const Day3Stack = createBottomTabNavigator(
  {
    Page1: {
      screen: Page1Stack,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="home"
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
            name="bell"
            color={tintColor}
            size={24}
          />
        ),
        tabBarLabel: '通知'
      })
    },
    Page3: {
      screen: Page3,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="envelope"
            color={tintColor}
            size={24}
          />
        ),
        tabBarLabel: '私信'
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
        tabBarLabel: '我'
      })
    }
  },
  {
    initialRouteName: 'Page1',
    tabBarOptions: {
      activeTintColor: '#1ba1f1'
    }
  }
)

export default Day3Stack