import * as React from 'react'
import { View } from 'react-native'

export default class Page extends React.Component<{ nav?: React.ReactElement<any> }, {}> {
  render() {
    const { children, nav } = this.props
    return (
      <View>
        <View>
          {nav}
        </View>
        <View>
          {children}
        </View>
      </View>
    )
  }
}
