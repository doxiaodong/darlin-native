
import * as React from 'react'
import { reaction } from 'mobx'
import { observer } from 'mobx-react'
import toasterStore from '@/stores/toaster'
import { log } from '@/utils'

@observer
export default class Toaster extends React.Component<{}, {}> {
  componentWillMount() {
    reaction(
      () => toasterStore.current,
      (current) => {
        if (current) {
          // TODO: add toaster component
          log(current, 'error')
        }
      }
    )
  }

  render() {
    return null
  }
}
