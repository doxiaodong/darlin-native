import * as  React from 'react'
import { Text } from 'react-native'
import NavigationBar from 'react-native-navbar'
import Page from '@/components/Page'

export default class Article extends React.Component<{}, {}> {
  render() {
    return (
      <Page
        nav={<NavigationBar title={{ title: 'Article' }} />}
      >
        <Text>Article</Text>
      </Page>
    )
  }
}
