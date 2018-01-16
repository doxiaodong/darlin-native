import { MD5 } from 'crypto-js'
import getCookie from './getCookie'

export default function getAESToken() {
  return MD5(getCookie('csrftoken')).toString()
}
