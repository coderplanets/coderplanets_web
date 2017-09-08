/*
*
* Shop
*
*/

import React from 'react'
import PropTypes from 'prop-types'

import { inject, observer } from 'mobx-react'

import { hello, helloFuck } from './logic'

/* import Link from 'next/link' */
/* import styled from 'styled-components' */

@inject('store')
@observer
export default class Shop extends React.Component {
  // componentDidMount() {}

  // componentWillUnmount() {}

  fuck() {
    hello()
    helloFuck()
    console.log(
      'set getPigeon',
      this.props.store.view.setPage('page', 'fuck page')
    )
    console.log('get getPigeon', this.props.store.view.getPage())
  }

  render() {
    console.log('isServer render: ', this.props.store.isServer)
    /* console.log('get getPigeon', this.props.store.view.getPigeon()) */

    return (
      <div style={{ padding: 40 }}>
        <h2>is server rendered: {this.props.store.isServer ? 'yes' : 'no'}</h2>
        <p>and this psge: {this.props.store.view.page}</p>
        <button onClick={hello}>fuck</button>
      </div>
    )
  }
}

Shop.propTypes = {
  /* eslint-disable react/require-default-props */
  store: PropTypes.any,
}

Shop.defaultProps = {}
