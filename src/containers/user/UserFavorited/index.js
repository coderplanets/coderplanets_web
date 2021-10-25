/*
 *
 * UserFavorited
 *
 */

import React from 'react'

import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import PagedArticles from '@/widgets/PagedArticles'
import Breadcrumbs from './Breadcrumbs'

import {
  useInit,
  onCatSelect,
  backToCategoryList,
  changeFavoriteThread,
  onReload,
  onPreview,
} from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:UserFavorited')

const UserFavoritedContainer = ({ userFavorited: store }) => {
  useInit(store)

  const {
    pagedData,
    parentView,
    curView,
    curCategoryData,
    curThread,
    viewingUser,
  } = store

  const { totalCount } = pagedData

  return (
    <div>
      {parentView === 'CATEGORY_LIST' ? (
        <div>TODO</div>
      ) : (
        <>
          <Breadcrumbs
            gotoParent={backToCategoryList}
            category={curCategoryData}
            curThread={curThread}
            totalCount={totalCount}
            changeFavoriteThread={changeFavoriteThread}
          />

          <PagedArticles
            data={pagedData}
            thread={curThread}
            curView={curView}
            emptyPrefix={`未找到 ${viewingUser.nickname} 收藏的`}
            onPageChange={onReload}
            onPreview={onPreview}
          />
        </>
      )}
    </div>
  )
}

export default pluggedIn(UserFavoritedContainer)
