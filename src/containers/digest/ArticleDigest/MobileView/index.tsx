/*
 *
 * ArticleDigest
 *
 */

import { FC } from 'react'
import { isNil } from 'ramda'

import type { TScrollDirection } from '@/spec'
import useScroll from '@/hooks/useScroll'
import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import ViewportTracker from '@/widgets/ViewportTracker'

import Layout from './Layout'

import type { TStore } from '../store'
import {
  Wrapper,
  InnerWrapper,
  BannerContent,
} from '../styles/mobile_view/index'
import { useInit, inAnchor, outAnchor } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleDigest')

type TProps = {
  articleDigest?: TStore
}

const ArticleDigestContainer: FC<TProps> = ({ articleDigest: store }) => {
  const { direction: scrollDirection } = useScroll()
  useInit(store, scrollDirection as TScrollDirection)

  const { viewingArticle: article, activeThread, tab } = store

  if (isNil(article.id)) return null

  return (
    <Wrapper>
      <InnerWrapper>
        <BannerContent>
          <Layout article={article} thread={activeThread} tab={tab} />
        </BannerContent>
      </InnerWrapper>
      <ViewportTracker onEnter={inAnchor} onLeave={outAnchor} />
    </Wrapper>
  )
}

export default bond(ArticleDigestContainer, 'articleDigest') as FC<TProps>
