/*
 *
 * UserFavorited
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
const debug = makeDebugger('C:UserFavorited')
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
    const { userFavorited } = this.props
    logic.init(userFavorited)
  }

  render() {
    const {
      userFavorited: {
        pagedPostsData,
        parentView,
        curView,
        curCategoryData,
        favoriteThread,
      },
    } = this.props

    const { entries, totalCount, pageNumber, pageSize } = pagedPostsData

    return (
      <div>
        {parentView === 'CATEGORY_LIST' ? (
          <FavoritesCats onSelect={logic.onCatSelect} displayMode="list" />
        ) : (
          <React.Fragment>
            <Breadcrumbs
              gotoParent={logic.backToCategoryList}
              category={curCategoryData}
              favoriteThread={favoriteThread}
              changeFavoriteThread={logic.changeFavoriteThread}
            />
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

export default inject(storePlug('userFavorited'))(
  observer(UserFavoritesContainer)
)
