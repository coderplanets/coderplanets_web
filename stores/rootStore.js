import { types, getEnv } from 'mobx-state-tree'
import fetch from 'isomorphic-fetch'

import BookStore from './BookStore'
import CartStore from './CartStore'
import ViewStore from './ViewStore'

let rootStore = null

const ShopStore = types
  .model('ShopStore', {
    bookStore: types.optional(BookStore, {
      books: {},
    }),
    cart: types.optional(CartStore, {
      entries: [],
    }),
    view: types.optional(ViewStore, {}),
  })
  .views(self => ({
    get fetch() {
      return getEnv(self).fetch
    },
    get isServer() {
      return getEnv(self).isServer
    },
    get alert() {
      return getEnv(self).alert
    },
    get isLoading() {
      return self.bookStore.isLoading
    },
    get books() {
      return self.bookStore.books
    },
    get sortedAvailableBooks() {
      return self.bookStore.sortedAvailableBooks
    },
  }))
  .actions(self => ({
    afterCreate() {
      self.bookStore.loadBooks()
    },
  }))

/* const fetcher = url => window.fetch(url).then(response => response.json()) */
const fetcher = url => fetch(url).then(response => response.json())

const createRootStore = isServer => {
  console.log('createRootStore isServer: ', isServer)
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
