import { action, observable } from 'mobx'

let store = null

class Store {
  @observable lastUpdate = 0
  @observable light = false
  @observable who = 'me...iii'

  timer = null

  constructor(isServer, lastUpdate) {
    this.lastUpdate = lastUpdate
  }

  @action
  start = () => {
    this.timer = setInterval(() => {
      this.lastUpdate = Date.now()
      this.light = true
    })
  }

  stop = () => clearInterval(this.timer)
}

function initStore(isServer, lastUpdate = Date.now()) {
  let ret
  if (isServer) {
    ret = new Store(isServer, lastUpdate)
  } else {
    if (store === null) {
      store = new Store(isServer, lastUpdate)
    }
    ret = store
  }

  return ret
}

export default initStore
