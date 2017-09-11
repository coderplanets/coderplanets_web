/*
*
* Shop example
*
*/

import React from 'react'
import PropTypes from 'prop-types'

import { observer, inject } from 'mobx-react'
import styled from 'styled-components'

import Books from './Books'
import BookDetails from './BookDetails'
import Cart from './Cart'
// import DevTools from './DevTools'

import Img from '../Img'

const StyledWrapper = styled.div`
  a,
  a:visited {
    color: orangered;
    cursor: pointer;
  }

  button {
    border: 1px solid orangered;
    background-color: white;
    color: orangered;
    float: right;
    cursor: pointer;
    border-radius: 4px;
    font-size: 1em;
    padding: 8px 8px;
  }

  button:disabled {
    background-color: lightgrey;
    color: darkgrey;
    border: none;
    cursor: default;
  }

  button:hover {
    border-width: 2px;
    position: relative;
    top: -1px;
    right: -1px;
  }
  > section {
    max-width: 800px;
    margin: auto;
    text-align: left;
    padding: 0 20px 0 20px;
  }
`

const StyledApp = styled.div`text-align: center;`

const StyledAppHeader = styled.div`
  background-color: whitesmoke;
  height: 150px;
  padding: 20px;
  color: grey;
`

const StyledAppLogo = styled(Img)`height: 80px;`

const StyledUl = styled.ul`
  background-color: orangered;
  height: 20px;
  font-weight: bold;
  margin: 0;
  padding: 8px;
  > li {
    display: inline-block;
    padding: 0px 10px;
  }
  > li a {
    color: white;
    text-decoration: underline;
    cursor: pointer;
  }
`

const Shop = inject('store')(
  observer(({ store }) => {
    /* console.log('fuck store', store.isServer) */
    return (
      <StyledWrapper>
        <StyledApp>
          <AppHeader />
          <AppMenu>
            <AppMenuItem onClick={() => store.view.openBooksPage()}>
              Available books
            </AppMenuItem>
            <AppMenuItem onClick={() => store.view.openCartPage()}>
              Your cart
            </AppMenuItem>
          </AppMenu>
        </StyledApp>
        {store.isLoading ? <h1>Loading...</h1> : renderPage(store.view)}
      </StyledWrapper>
    )
  })
)

function renderPage(viewStore) {
  switch (viewStore.page) {
    case 'books':
      return <Books />
    case 'book': {
      const book = viewStore.selectedBook
      return book ? (
        <BookDetails book={book} />
      ) : (
        <h1>Book ${viewStore.selectedBookId} not found!</h1>
      )
    }
    case 'cart':
      return <Cart />
    default:
      return 'Sry, not found'
  }
}

const AppHeader = () => (
  <StyledAppHeader>
    <StyledAppLogo src={'/static/shopLogo.svg'} alt="logo" />

    <h2>Welcome to the React MobX Book shop!</h2>
  </StyledAppHeader>
)

const AppMenu = ({ children }) => <StyledUl>{children}</StyledUl>

const AppMenuItem = ({ onClick, children }) => (
  <li>
    <a onClick={onClick}>{children}</a>
  </li>
)

AppMenu.propTypes = {
  children: PropTypes.array.isRequired,
}

Shop.propTypes = {
  /* eslint-disable react/require-default-props */
  store: PropTypes.any,
}

Shop.defaultProps = {}

export default Shop
