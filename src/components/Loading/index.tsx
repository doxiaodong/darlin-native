import * as React from 'react'
import { Text } from 'react-native'

export default class Loading extends React.Component<{ desc: string }, {}> {
  static defaultProps = {
    desc: 'loading...'
  }
  render() {
    const { desc } = this.props
    return <Text>{desc}</Text>
  }
}
