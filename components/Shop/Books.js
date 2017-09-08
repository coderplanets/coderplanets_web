import React from 'react'
import { observer, inject } from 'mobx-react'

const Books = inject('store')(
  observer(({ store }) => (
    <section className="Page-books">
      <h1>Available books</h1>
      <ol>
        {store.sortedAvailableBooks.map(book => (
          <BookEntry key={book.id} book={book} />
        ))}
      </ol>
    </section>
  ))
)

const BookEntry = inject('store')(
  observer(({ book, store }) => (
    <li>
      <a
        href={`/book/${book.id}`}
        onClick={e => {
          e.preventDefault()
          store.view.openBookPage(book)
          return false
        }}
      >
        {book.name}
      </a>
    </li>
  ))
)

export default Books
