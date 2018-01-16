import * as  React from 'react'
import { Text } from 'react-native'
import NavigationBar from 'react-native-navbar'
import Page from '@/components/Page'

export default class Account extends React.Component<{}, {}> {
  render() {
    return (
      <Page
        nav={<NavigationBar title={{ title: 'Account' }} />}
      >
        <Text>Account</Text>
      </Page>
    )
  }
}
