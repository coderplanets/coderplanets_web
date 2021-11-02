import { FC } from 'react'

import type { TMetric, TRSSAuthor } from '@/spec'
import { buildLog } from '@/utils/logger'

import BlogAuthorInfo from '@/widgets/BlogAuthorInfo'

import { MainWrapper, ArticleWrapper } from '../../styles/desktop_view'

/* eslint-disable-next-line */
const log = buildLog('C:BlogContent:AuthorTab')

type TProps = {
  metric: TMetric
  author: TRSSAuthor
}

const AuthorTab: FC<TProps> = ({ metric, author }) => {
  return (
    <MainWrapper metric={metric}>
      <ArticleWrapper>
        <BlogAuthorInfo author={author} />
      </ArticleWrapper>
    </MainWrapper>
  )
}

export default AuthorTab
