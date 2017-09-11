import { types, getEnv } from 'mobx-state-tree'

import BookStore from '../BookStore'
import CartStore from '../CartStore'
import ViewStore from '../ViewStore'

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

export default ShopStore
