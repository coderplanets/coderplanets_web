import { types, getParent } from 'mobx-state-tree'
import bookMockJson from '../ShopStore/books.mock'

import { makeDebugger } from '../../utils/debug'

const debug = makeDebugger('S:bookStore')

export const Book = types.model('Book', {
  id: types.identifier(),
  name: types.string,
  author: types.string,
  price: types.number,
  isAvailable: true,
})

const BookStore = types
  .model('BookStore', {
    isLoading: true,
    books: types.map(Book),
  })
  .views(self => ({
    get shop() {
      return getParent(self)
    },
    get sortedAvailableBooks() {
      return sortBooks(self.books.values())
    },
  }))
  .actions(self => ({
    markLoading(loading) {
      self.isLoading = loading
    },

    updateBooks(json) {
      self.books.values().forEach(book => (book.isAvailable = false))
      debug('load book json: ', json)
      json.forEach(bookJson => {
        self.books.put(bookJson)
        self.books.get(bookJson.id).isAvailable = true
      })
    },

    loadBooks() {
      /* debug('load book: ', bookMockJson) */
      self.updateBooks(bookMockJson)
      setTimeout(() => {
        self.markLoading(false)
      }, 100)
    },
  }))

function sortBooks(books) {
  return books
    .filter(b => b.isAvailable)
    .sort((a, b) => (a.name > b.name ? 1 : a.name === b.name ? 0 : -1))
}

export default BookStore
