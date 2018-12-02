import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import RoundButton from './components/RoundButton'
import { connect } from 'react-redux'
import { STOPWATCH_START, STOPWATCH_STOP, STOPWATCH_COUNT, STOPWATCH_RESET, STOPWATCH_MOVE } from '../../store/actions/stopwatch'
import format from '../../util/format'

const mapStateToProps = (state) => {
  return {
    stopwatchs: state.getIn(['stopwatch', 'stopwatchs']),
    status: state.getIn(['stopwatch', 'start']),
    leftText: state.getIn(['stopwatch', 'leftText']),
    rightText: state.getIn(['stopwatch', 'rightText']),
    current: state.getIn(['stopwatch', 'current'])
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#f5f5f5',
    minHeight: '100%'
  },
  top: {
    width: '100%',
    aspectRatio: 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  topText: {
    fontSize: 60,
    fontWeight: '100'
  },
  middle: {
    width: '100%',
    aspectRatio: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  bottom: {
    padding: 20
  },
  listItem: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 12,
    lineHeight: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  count: {
    color: '#666'
  }
})

class Day2Screen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Stopwatch',
      headerLeft: ({}) => {
        return (
          <Button
            onPress={() => navigation.navigate('Home')}
            title="back"
          />
        )
      }
    } 
  }

  constructor (props) {
    super(props)
    this.timer = null
  }

  componentDidMount () {
    const { status } = this.props
    if (status) {
      this.timer = setInterval(() => {
        let changeTime = new Date().getTime()
        this.props.dispatch({
          type: STOPWATCH_MOVE,
          changeTime
        })
      }, 10)
    }
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  handleReset = () => {
    this.props.dispatch({
      type: STOPWATCH_RESET
    })
  }

  handleCount = () => {
    this.props.dispatch({
      type: STOPWATCH_COUNT
    })
  }

  handleStart = () => {
    this.props.dispatch({
      type: STOPWATCH_START,
      current: new Date().getTime()
    })
    this.timer = setInterval(() => {
      let changeTime = new Date().getTime()
      this.props.dispatch({
        type: STOPWATCH_MOVE,
        changeTime
      })
    }, 10)
  }

  handleStop = () => {
    this.props.dispatch({
      type: STOPWATCH_STOP
    })
    clearInterval(this.timer)
  }

  onCountOrResetOrStartOrStop = (tilte) => {
    switch (tilte) {
      case '复位':
        return this.handleReset()
      case '启动':
        return this.handleStart()
      case '计次':
        return this.handleCount()
      case '停止':
        return this.handleStop()
    }
  }

  render () {
    const { leftText, rightText, current, stopwatchs } = this.props
    return (
      <SafeAreaView>
        <View style={styles.root}>
          <View style={styles.top}>
            <Text style={styles.topText}>
              { format(current) }
            </Text>
          </View>
          <View style={styles.middle}>
            <RoundButton
              onPress={this.onCountOrResetOrStartOrStop}
              title={leftText}
            />
            <RoundButton
              onPress={this.onCountOrResetOrStartOrStop}
              title={rightText}
            />
          </View>
          <ScrollView>
            <View style={styles.bottom}>
              {
                stopwatchs.size > 0 && stopwatchs.map(stopwatc => {
                  return (
                    <View style={styles.listItem}>
                      <Text style={styles.count}>计次1</Text>
                      <Text>00:00.01</Text>
                    </View>
                  )
                })
              }
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}

const Day2Stack = createStackNavigator(
  {
    Day2: connect(mapStateToProps)(Day2Screen)
  }
)

export default Day2Stack
