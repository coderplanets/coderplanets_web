import { ShopStore } from './ShopStore'

let rootStore = null

const fetcher = url => window.fetch(url).then(response => response.json())

const createRootStore = function() {
  return ShopStore.create(
    {},
    {
      fetch: fetcher,
      alert: m => console.log(m), // Noop for demo: window.alert(m)
    }
  )
}

export function initStore(isServer) {
  if (isServer) {
    return createRootStore()
  } else {
    if (rootStore === null) {
      rootStore = createRootStore()
    }
    return rootStore
  }
}
