import * as React from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import { TabBar } from 'antd-mobile'
import iconsStore from '@/stores/icons'

import Home from '@/views/Home'
import Article from '@/views/Article'
import Account from '@/views/Account'
import Others from '@/views/Others'

enum Tabs {
  Home = 0,
  Article = 1,
  Account = 2,
  Others = 3
}

@observer
export default class Routes extends React.Component<{}, {}> {

  @observable private selectedTab: Tabs = Tabs.Home

  @action.bound
  selectTab(tab: Tabs) {
    this.selectedTab = tab
  }

  render() {
    return (
      <TabBar>
        <TabBar.Item
          title="首页"
          key={Tabs.Home}
          selected={this.selectedTab === Tabs.Home}
          onPress={() => { this.selectTab(Tabs.Home) }}
          icon={iconsStore.getIcon('ios-bowtie-outline')}
          selectedIcon={iconsStore.getIcon('ios-bowtie')}
        >
          <Home />
        </TabBar.Item>
        <TabBar.Item
          badge="3"
          title="文章"
          key={Tabs.Article}
          selected={this.selectedTab === Tabs.Article}
          onPress={() => { this.selectTab(Tabs.Article) }}
          icon={iconsStore.getIcon('ios-list-box-outline')}
          selectedIcon={iconsStore.getIcon('ios-list-box')}
        >
          <Article />
        </TabBar.Item>
        <TabBar.Item
          title="账户"
          key={Tabs.Account}
          selected={this.selectedTab === Tabs.Account}
          onPress={() => { this.selectTab(Tabs.Account) }}
          icon={iconsStore.getIcon('ios-settings-outline')}
          selectedIcon={iconsStore.getIcon('ios-settings')}
        >
          <Account />
        </TabBar.Item>
        <TabBar.Item
          title="瞎扯淡"
          key={Tabs.Others}
          selected={this.selectedTab === Tabs.Others}
          onPress={() => { this.selectTab(Tabs.Others) }}
          icon={iconsStore.getIcon('ios-hammer-outline')}
          selectedIcon={iconsStore.getIcon('ios-hammer')}
        >
          <Others />
        </TabBar.Item>
      </TabBar>
    )
  }
}
