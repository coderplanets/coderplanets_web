import fetch from 'isomorphic-fetch'
import { ShopStore } from './ShopStore'

let rootStore = null

/* const fetcher = url => window.fetch(url).then(response => response.json()) */
const fetcher = url => fetch(url).then(response => response.json())

const createRootStore = isServer => {
  return ShopStore.create(
    {},
    {
      fetch: fetcher,
      alert: m => console.log(m), // Noop for demo: window.alert(m)
      isServer,
    }
  )
}

function initStore(isServer) {
  let ret

  if (isServer) {
    ret = createRootStore(isServer)
  } else {
    if (rootStore === null) {
      rootStore = createRootStore(isServer)
    }
    ret = rootStore
  }
  return ret
}

export default initStore
