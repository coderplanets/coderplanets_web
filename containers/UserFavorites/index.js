/*
 *
 * UserFavorites
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import FavoritesCats from '../FavoritesCats'
import { PostItemLoading, Pagi, PostItem } from '../../components'

import Breadcrumbs from './Breadcrumbs'

import { uid, makeDebugger, storePlug, TYPE } from '../../utils'
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
              key={uid.gen()}
              entry={entry}
              active={active}
              onTitleSelect={debug}
            />
          ))}
        </React.Fragment>
      )
    }
    default:
      return <PostItemLoading num={5} />
  }
}

class UserFavoritesContainer extends React.Component {
  componentWillMount() {
    const { userFavorites } = this.props
    logic.init(userFavorites)
  }

  render() {
    const {
      userFavorites: { pagedPostsData, parentView, curView },
    } = this.props

    const { entries, totalCount, pageNumber, pageSize } = pagedPostsData

    return (
      <div>
        {parentView === 'CATEGORY_LIST' ? (
          <FavoritesCats onSelect={logic.onCatSelect} />
        ) : (
          <React.Fragment>
            <Breadcrumbs gotoParent={logic.backToCategoryList} />
            <View entries={entries} curView={curView} />
            <Pagi
              left="-10px"
              pageNumber={pageNumber}
              pageSize={pageSize}
              totalCount={totalCount}
              onChange={debug}
            />
          </React.Fragment>
        )}
      </div>
    )
  }
}

export default inject(storePlug('userFavorites'))(
  observer(UserFavoritesContainer)
)
