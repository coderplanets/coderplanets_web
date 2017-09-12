import { types, getParent } from 'mobx-state-tree'

const ViewStore = types
  .model({
    page: 'books',
    selectedBookId: '',
  })
  .views(self => ({
    get shop() {
      return getParent(self)
    },
    get pigeon() {
      return self.shop.fetch
    },

    get isLoading() {
      return self.shop.isLoading
    },
    get currentUrl() {
      switch (self.page) {
        case 'books':
          return '/'
        case 'book':
          return `/book/${self.selectedBookId}`
        case 'cart':
          return '/cart'
        default:
          return '/404'
      }
    },
    get selectedBook() {
      return self.isLoading || !self.selectedBookId
        ? null
        : self.shop.books.get(self.selectedBookId)
    },
  }))
  .actions(self => ({
    setPage(key, val) {
      self[key] = val
    },

    getPage() {
      // console.log('get Page: ', self.page)
    },

    openBooksPage() {
      self.page = 'books'
      self.selectedBookId = ''
    },
    openBookPage(book) {
      self.page = 'book'
      self.selectedBookId = book.id
    },
    openBookPageById(id) {
      self.page = 'book'
      self.selectedBookId = id
    },
    openCartPage() {
      self.page = 'cart'
      self.selectedBookId = ''
    },
  }))

export default ViewStore
