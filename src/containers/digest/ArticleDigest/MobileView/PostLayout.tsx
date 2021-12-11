/*
 *
 * ArticleDigest
 *
 */

import { FC } from 'react'

import type { TPost } from '@/spec'
import { buildLog } from '@/utils/logger'

import ArticleBaseStats from '@/widgets/ArticleBaseStats'
import ReadableDate from '@/widgets/ReadableDate'

import {
  Wrapper,
  PublishDateInfo,
  Title,
} from '../styles/mobile_view/post_layout'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleDigest')

type TProps = {
  article?: TPost
}

const PostLayout: FC<TProps> = ({ article }) => {
  return (
    <Wrapper>
      <PublishDateInfo>
        <ReadableDate date={article.insertedAt} fmt="absolute" />
      </PublishDateInfo>
      <Title>{article.title}</Title>
      <ArticleBaseStats article={article} />
    </Wrapper>
  )
}

export default PostLayout
