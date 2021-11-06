/*
 *
 * UserPublished
 *
 */

import { FC, Fragment } from 'react'

import type { TResState } from '@/spec'

import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import PagedArticles from '@/widgets/PagedArticles'
import ThreadSelector from './ThreadSelector'

import { TStore } from './store'
import { ArticlesWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:UserPublished')

type TProps = {
  userPublishedArticles?: TStore
}

const UserPublishedArticlesContainer: FC<TProps> = ({
  userPublishedArticles: store,
}) => {
  useInit(store)

  const { viewingUser, pagedArticlesData, c11n, resState } = store

  // console.log('pagedArticlesData: ', pagedArticlesData)
  return (
    <Fragment>
      <ThreadSelector user={viewingUser} />
      <ArticlesWrapper>
        <PagedArticles
          data={pagedArticlesData}
          thread="post"
          resState={resState as TResState}
          c11n={c11n}
        />
      </ArticlesWrapper>
    </Fragment>
  )
}

export default pluggedIn(UserPublishedArticlesContainer) as FC<TProps>
