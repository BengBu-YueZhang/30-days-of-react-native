import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView, View, PanResponder, StyleSheet, LayoutAnimation } from 'react-native'

const styles = StyleSheet.create(
  {
    root: {
      width: '100%'
    }
  }
)

class RnDnD extends React.Component {

  static getDerivedStateFromProps (nextProps, prevState) {
    return {
      data: nextProps.data
    }
  }

  constructor (props) {
    super(props)
    this._layoutMap = {}
    this._panResponder = null
    this.index = 0
    this.finalIndex = 0
    this.top = 0
    this.prev_top = 0
    this._heigth = 0
    this.state = {
      selected: 0
    }
    this.animations = {
      duration: 200,
      create: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.opacity
      },
      update: {
        type: LayoutAnimation.Types.linear,
        springDamping: 0.7,
      }
    }
    this.initPanResponder()
  }

  _endMove = (evt, gestureState) => {
    for (let key in this._layoutMap) {
      if (this._layoutMap[key].y <= this.top &&
        this.top <= (this._layoutMap[key].y + this._layoutMap[key].height) &&
        key !== this.index) {
        this.finalIndex = key
        break
      }
    }
    for (let key in this._layoutMap) {
      if (key > this.finalIndex) {
        let item = this.refs['view' + key]
      }
    }
  }

  _release = (evt, gestureState) => {
  }

  initPanResponder = () => {
    this._panResponder = PanResponder.create(
      {
        onStartShouldSetPanResponder: (evt, gestureState) => {
          const vy = Math.abs(gestureState.vy)
          const vx = Math.abs(gestureState.vx)
          return vy > vx && this.state.active
        },
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onPanResponderGrant: (evt, gestureState) => {
          const { pageY } = evt.nativeEvent
          for (let key in this._layoutMap) {
            if (this._layoutMap[key].y <= pageY &&
                pageY <= (this._layoutMap[key].y + this._layoutMap[key].height)
              ) {
              this.index = key
              this._heigth = this._layoutMap[key].height
              break
            }
          }
          this.setState({
            selected: this.index
          })
          this.prev_top = this._layoutMap[this.index].y
          let box = this.refs['view' + this.index]
          box.setNativeProps({
            style: { 
              opacity:0.7,
              shadowColor: "#000",
              shadowOpacity: 0.3,
              shadowRadius: 5,
              shadowOffset: {
                height: 0,
                width: 2
              },
              zIndex: 2
            },
          })
        },
        onPanResponderMove: (evt, gestureState) => {
          this.top =  this.prev_top + gestureState.dy
          let box = this.refs['view' + this.index]
          box.setNativeProps({
            style: {
              top: this.top
            }
          })
          this._endMove(evt, gestureState)
        },
        onPanResponderTerminationRequest: (evt, gestureState) => true,
        onPanResponderRelease: (evt, gestureState) => {},
        onPanResponderTerminate: (evt, gestureState) => {},
        onShouldBlockNativeResponder: (event, gestureState) => true,
      }
    )
  }

  componentDidMount () {
    setTimeout(() => {
      for (let key in this._layoutMap) {
        let item = this.refs['view' + key]
        item.setNativeProps({
          style: { 
            position: 'absolute',
            left: 0,
            top: this._layoutMap[key].y
          },
        })
      }
    }, 50)
  }

  render () {
    const { template } = this.props
    const { data } = this.state
    const Template = template
    return (
      <View>
        {
          data && data.map((item, i) => {
            return (
              <View
                style={styles.root}
                {...this._panResponder.panHandlers}
                key={item.id}
                ref={`view${i}`}
                onLayout={(event) => {
                  const { x, y, width, height } = event.nativeEvent.layout
                  this._layoutMap = {
                    ...this._layoutMap,
                    [i]: { x, y, width, height }
                  }
                }}
                >
                <Template
                  {...item}
                />
              </View>
            )
          })
        }
      </View>
    )
  }
}

RnDnD.propTypes = {
  data: PropTypes.array.isRequired,
  template: PropTypes.any.isRequired,
  onMove: PropTypes.func
}

export default RnDnD