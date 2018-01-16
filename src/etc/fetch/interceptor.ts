
import { Interceptor } from 'intercept-fetch'
import { getCookie, getAESToken, log } from '@/utils'

const apiPrefix = 'https://api.darlin.me'

export const corsInterceptor = new Interceptor({
  cors: {
    request(url, config) {
      config.mode = 'cors'
      config.credentials = 'include'
      config.cache = 'default'
      return Promise.resolve([url, config]) as any
    }
  }
})

export const prefixInterceptor = new Interceptor({
  prefix: {
    request(url, config) {
      url = apiPrefix + url
      return Promise.resolve([url, config]) as any
    }
  }
})

export const tokenInterceptor = new Interceptor({
  token: {
    request(url, config) {
      const headers = config.headers as Headers || new Headers()

      headers.set('X-CSRFToken', getCookie('csrftoken'))
      headers.set('X-AESToken', getAESToken())

      config.headers = headers

      return Promise.resolve([url, config]) as any
    }
  }
})

export const errorInterceptor = new Interceptor({
  error: {
    async error(res) {
      let errorCode
      try {
        const body = await res.clone().json()
        errorCode = body && body.code
      } catch (error) {
        errorCode = res.status
      }

      log(errorCode)

      return res
    }
  }
})

// merge
const interceptors = corsInterceptor
  .merge(prefixInterceptor)
  .merge(tokenInterceptor)
  .merge(errorInterceptor)

export default interceptors
