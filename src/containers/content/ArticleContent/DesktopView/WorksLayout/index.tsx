import { FC } from 'react'
import { isMobile } from 'react-device-detect'

import type { TMetric } from '@/spec'
import { WORKS_TAB } from '@/constant'

import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import ArticleSticker from '@/containers/tool/ArticleSticker'
import WorksInfoCard from '@/widgets/WorksInfoCard'

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

  const { viewingArticle: works, articleTab } = store
  if (!works.id) return null

  if (articleTab === WORKS_TAB.TECHSTACKS) {
    return (
      <Wrapper testid={testid}>
        <InnerWrapper>
          <TechStackTab metric={metric} article={works} />
          {!isMobile && (
            <SidebarWrapper>
              <ArticleSticker metric={metric} />
            </SidebarWrapper>
          )}
        </InnerWrapper>
      </Wrapper>
    )
  }
  if (articleTab === WORKS_TAB.BASIC && isMobile) {
    return (
      <Wrapper testid={testid}>
        <InnerWrapper>
          <WorksInfoCard article={works} />
        </InnerWrapper>
      </Wrapper>
    )
  }

  return (
    <Wrapper testid={testid}>
      <InnerWrapper>
        <ArticleTab metric={metric} article={works} />
        {!isMobile && (
          <SidebarWrapper>
            <ArticleSticker metric={metric} />
          </SidebarWrapper>
        )}
      </InnerWrapper>
    </Wrapper>
  )
}

export default bond(ArticleContentContainer, 'articleContent') as FC<TProps>
