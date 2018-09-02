/*
 *
 * UserFavorites
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import shortid from 'shortid'

import { FavoritesCats } from '..'
import { makeDebugger, storePlug, TYPE } from '../../utils'

import {
  PostsLoading,
  /* Pagi, */
  /* EmptyThread, */
  Pagi,
  PostItem,
} from '../../components'

import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:UserFavorites')
/* eslint-enable no-unused-vars */

const View = ({ entries, curView, active }) => {
  switch (curView) {
    case TYPE.RESULT: {
      return (
        <React.Fragment>
          {entries.map(entry => (
            <PostItem
              key={shortid.generate()}
              entry={entry}
              active={active}
              onTitleSelect={debug}
            />
          ))}
        </React.Fragment>
      )
    }
    default:
      return <PostsLoading num={5} />
  }
}

class UserFavoritesContainer extends React.Component {
  componentWillMount() {
    const { userFavorites } = this.props
    logic.init(userFavorites)
  }

  render() {
    const {
      userFavorites: { pagedPostsData, curView },
    } = this.props

    const { entries, totalCount, pageNumber, pageSize } = pagedPostsData

    return (
      <div>
        <FavoritesCats />
        <React.Fragment>
          <View entries={entries} curView={curView} />
          <Pagi
            left="-10px"
            pageNumber={pageNumber}
            pageSize={pageSize}
            totalCount={totalCount}
            onChange={debug}
          />
        </React.Fragment>
      </div>
    )
  }
}

export default inject(storePlug('userFavorites'))(
  observer(UserFavoritesContainer)
)
