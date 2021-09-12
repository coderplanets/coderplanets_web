import { FC, memo } from 'react'

import type { TArticle } from '@/spec'
import { ISSUE_ADDR, API_SERVER_ADDR } from '@/config'
import { METRIC } from '@/constant'

import TopInfo from './TopInfo'
import BottomInfo from './BottomInfo'

import {
  Wrapper,
  InnerWrapper,
  MainInfos,
  BaseInfo,
  Item,
} from '../styles/desktop_view/works_article_layout'

type TProps = {
  viewingArticle: TArticle
}

const WorksArticleLayout: FC<TProps> = ({ viewingArticle }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <TopInfo
          metric={METRIC.WORKS_ARTICLE}
          article={viewingArticle}
          noBottomBorder
        />
        <MainInfos>
          <BaseInfo>
            <Item href="/home/post/1" rel="noopener noreferrer" target="_blank">
              关于
            </Item>
            <Item
              href="/cps-support/posts"
              rel="noopener noreferrer"
              target="_blank"
            >
              创建社区
            </Item>
            <Item
              href="/cps-support/posts"
              rel="noopener noreferrer"
              target="_blank"
            >
              加入我们
            </Item>
            <Item
              href={`${API_SERVER_ADDR}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              OpenSource
            </Item>
            <Item
              href={`${API_SERVER_ADDR}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              特别感谢
            </Item>
            <Item
              href={`${ISSUE_ADDR}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              反馈与建议
            </Item>
          </BaseInfo>
        </MainInfos>
      </InnerWrapper>
      <BottomInfo metric={METRIC.WORKS_ARTICLE} />
    </Wrapper>
  )
}

export default memo(WorksArticleLayout)
