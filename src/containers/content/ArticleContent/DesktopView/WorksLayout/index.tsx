import { FC } from 'react'

import type { TMetric } from '@/spec'
import { WORKS_TAB } from '@/constant'

import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import ArticleSticker from '@/containers/tool/ArticleSticker'

import ArticleTab from './ArticleTab'
import TechStackTab from './TechStackTab'

import type { TStore } from '../../store'

import {
  Wrapper,
  InnerWrapper,
  SidebarWrapper,
} from '../../styles/desktop_view/works_layout'

import { useInit } from '../../logic'

/* eslint-disable-next-line */
const log = buildLog('C:BlogContent')

type TProps = {
  articleContent?: TStore
  testid?: string
  metric?: TMetric
}

const ArticleContentContainer: FC<TProps> = ({
  articleContent: store,
  metric,
  testid,
}) => {
  useInit(store)

  const { viewingArticle, articleTab } = store
  if (!viewingArticle.id) return null

  if (articleTab === WORKS_TAB.TECHSTACKS) {
    return (
      <Wrapper testid={testid}>
        <InnerWrapper>
          <TechStackTab metric={metric} article={viewingArticle} />
          <SidebarWrapper>
            <ArticleSticker metric={metric} />
          </SidebarWrapper>
        </InnerWrapper>
      </Wrapper>
    )
  }

  return (
    <Wrapper testid={testid}>
      <InnerWrapper>
        <ArticleTab metric={metric} article={viewingArticle} />
        <SidebarWrapper>
          <ArticleSticker metric={metric} />
        </SidebarWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default pluggedIn(ArticleContentContainer) as FC<TProps>
