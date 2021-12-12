/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, memo } from 'react'

import CommunityLayout from './CommunityLayout'
import ArticleLayout from './ArticleLayout'

import type { TCurActive } from '../spec'

type TProps = {
  curActive: TCurActive
}

const MoreMenu: FC<TProps> = ({ curActive }) => {
  console.log('-# > curActive -> ', curActive)

  if (curActive.article?.id) {
    return <ArticleLayout />
  }

  return <CommunityLayout />
}

export default memo(MoreMenu)
