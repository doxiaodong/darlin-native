import {
  observable,
  action
} from 'mobx'
import Icon from 'react-native-vector-icons/Ionicons'

export class Icons {
  @observable private icons = {}

  @action setIcon(name, source): void {
    this.icons[name] = source
  }

  getIcon(name) {
    return this.icons[name]
  }
}

const icons = new Icons();

[
  'ios-bowtie-outline', 'ios-bowtie',
  'ios-list-box-outline', 'ios-list-box',
  'ios-settings-outline', 'ios-settings',
  'ios-hammer-outline', 'ios-hammer'
].map(async (name) => {
  const source = await Icon.getImageSource(name, 28)
  icons.setIcon(name, source)
})

export default icons
