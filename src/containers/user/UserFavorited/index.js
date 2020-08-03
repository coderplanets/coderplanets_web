/*
 *
 * UserFavorited
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@/utils'

import FavoritesCats from '@/containers/FavoritesCats'
import PagedContents from '@/components/PagedContents'
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
        <FavoritesCats onSelect={onCatSelect} displayMode="list" />
      ) : (
        <>
          <Breadcrumbs
            gotoParent={backToCategoryList}
            category={curCategoryData}
            curThread={curThread}
            totalCount={totalCount}
            changeFavoriteThread={changeFavoriteThread}
          />

          <PagedContents
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

export default connectStore(UserFavoritedContainer)
