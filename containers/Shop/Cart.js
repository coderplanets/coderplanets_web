import React from 'react'
import { observer, inject } from 'mobx-react'
import styled from 'styled-components'

// import './Cart.css'

const StyleCartItem = styled.section`
  border: 1px solid orangered;
  border-radius: 4px;
  padding: 0 16px;
  margin-bottom: 16px;
`

const StyleCartItemDetail = styled.div`
  width: 200px;
  margin-left: auto;
  margin-right: 0px;
  background-color: #e2e2e2;
  padding: 8px 20px;
  margin-bottom: 8px;
  border-radius: 4px;
  font-size: 0.8em;
  text-align: right;
  > p {
    margin: 0;
    padding: 0;
  }
  > input {
    width: 50px;
  }
`

const Cart = inject('store')(
  observer(({ store: { cart } }) => (
    <section>
      <h2>Your cart</h2>
      <div>
        {cart.entries.map(entry => (
          <CartEntry key={entry.book.id} entry={entry} />
        ))}
      </div>
      <p>Subtotal: {cart.subTotal} €</p>
      {cart.hasDiscount && (
        <p>
          <i>Large order discount: {cart.discount} €</i>
        </p>
      )}
      <p>
        <b>Total: {cart.total} €</b>
      </p>
      <button disabled={!cart.canCheckout} onClick={() => cart.checkout()}>
        Submit order
      </button>
    </section>
  ))
)

/* eslint-disable */
const CartEntry = inject('store')(
  observer(({ store, entry }) => (
    <StyleCartItem>
      <p>
        <a
          href={`/book/${entry.book.id}`}
          onClick={onEntryClick.bind(entry, store)}
        >
          {entry.book.name}
        </a>
      </p>
      {!entry.book.isAvailable && (
        <p>
          <b>Not available anymore</b>
        </p>
      )}
      <StyleCartItemDetail>
        <p>
          Amount:
          <input
            value={entry.quantity}
            onChange={updateEntryQuantity.bind(null, entry)}
          />
          total: <b>{entry.price} €</b>
        </p>
      </StyleCartItemDetail>
    </StyleCartItem>
  ))
)

function onEntryClick(store, e) {
  store.view.openBookPage(this.book)
  e.preventDefault()
  return false
}

function updateEntryQuantity(entry, e) {
  if (e.target.value) entry.setQuantity(parseInt(e.target.value, 10))
}

export default Cart
