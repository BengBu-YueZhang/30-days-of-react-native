import { createSwitchNavigator, createStackNavigator } from 'react-navigation'
import AuthScreen from './components/Auth'
import UserScreen from './components/User'

const UserStack = createStackNavigator(
  {
    User: UserScreen
  }
)

const Day9Stack = createSwitchNavigator(
  {
    User: UserStack,
    Auth: AuthScreen
  },
  {
    initialRouteName: 'Auth'
  }
)

export default Day9Stack
