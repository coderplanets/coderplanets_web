import React from 'react'
import observer from '../../utils/mobx_utils'

// obly select part of the store by need
const selector = ({ store }) => ({
  cart: store.cart,
})

const BookDetails = observer(selector, ({ book, cart }) => {
  return (
    <section className="Page-book">
      <h2>{book.name}</h2>
      <p>
        <i>By: {book.author}</i>
      </p>
      <p>Price: ${book.price}€</p>
      <button
        onClick={() => {
          // console.log('hello book: ', book)
          // console.log('hello cart: ', cart)
          cart.addBook(book)
        }}
      >
        Add to cart
      </button>
    </section>
  )
})

/*
const BookDetails = inject('store')(
  observer(({ book, store }) => (
    <section className="Page-book">
      <h2>{book.name}</h2>
      <p>
        <i>By: {book.author}</i>
      </p>
      <p>Price: ${book.price}€</p>
      <button
        onClick={() => {
          store.cart.addBook(book)
        }}
      >
        Add to cart
      </button>
    </section>
  ))
)
*/

export default BookDetails
