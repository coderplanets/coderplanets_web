/*
*
* Shop
*
*/

import React from 'react'

// import { inject, observer } from 'mobx-react'
// import Link from 'next/link'
// import styled from 'styled-components'

interface Iprops {
  any?: any
}

// @inject('')
// @observer
class Shop extends React.Component<Iprops, {}> {
  //componentDidMount() {}

  // componentWillUnmount() {}

  render() {
    return (
      <div>
        <h2>this is the fucking shop</h2>
        <p>and this is the fucking desc</p>
      </div>
    )
  }
}

export default Shop
