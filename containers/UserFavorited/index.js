/*
 *
 * UserFavorited
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import FavoritesCats from '../FavoritesCats'
import PagedContents from '../../components/PagedContents'

import Breadcrumbs from './Breadcrumbs'

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'
/* eslint-disable-next-line */
const debug = makeDebugger('C:UserFavorited')

class UserFavoritesContainer extends React.Component {
  componentDidMount() {
    const { userFavorited } = this.props
    logic.init(userFavorited)
  }

  render() {
    const { userFavorited } = this.props

    const {
      pagedData,
      parentView,
      curView,
      curCategoryData,
      curThread,
      viewingUser,
    } = userFavorited

    const { totalCount } = pagedData

    return (
      <div>
        {parentView === 'CATEGORY_LIST' ? (
          <FavoritesCats onSelect={logic.onCatSelect} displayMode="list" />
        ) : (
          <React.Fragment>
            <Breadcrumbs
              gotoParent={logic.backToCategoryList}
              category={curCategoryData}
              curThread={curThread}
              totalCount={totalCount}
              changeFavoriteThread={logic.changeFavoriteThread}
            />

            <PagedContents
              data={pagedData}
              thread={curThread}
              curView={curView}
              emptyPrefix={`未找到 ${viewingUser.nickname} 收藏的`}
              onPageChange={logic.reload}
              onPreview={logic.onPreview}
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
