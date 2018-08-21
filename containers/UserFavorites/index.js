/*
*
* UserFavorites
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'

// import { } from './styles'

import { makeDebugger, storePlug } from '../../utils'

import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:UserFavorites')
/* eslint-enable no-unused-vars */

class UserFavoritesContainer extends React.Component {
  componentWillMount() {
    const { userFavorites } = this.props
    logic.init(userFavorites)
  }

  render() {
    return (
      <div>
        <h2>UserFavorites container!</h2>
        <div>impress me!</div>
      </div>
    )
  }
}

export default inject(storePlug('userFavorites'))(
  observer(UserFavoritesContainer)
)
