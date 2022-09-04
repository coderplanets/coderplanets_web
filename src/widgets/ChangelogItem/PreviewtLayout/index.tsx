/*
 *
 * ChangelogItem
 *
 */

import { FC, Fragment, memo } from 'react'

import { buildLog } from '@/utils/logger'

import ArticleLayout from './ArticleLayout'
import DefaultLayout from './DefaultLayout'

/* eslint-disable-next-line */
const log = buildLog('w:ChangelogItem:index')

type TProps = {
  showFullArticle?: boolean
}

const PreviewLayout: FC<TProps> = ({ showFullArticle = false }) => {
  return (
    <Fragment>
      {showFullArticle ? <ArticleLayout /> : <DefaultLayout />}
    </Fragment>
  )
}

export default memo(PreviewLayout)
