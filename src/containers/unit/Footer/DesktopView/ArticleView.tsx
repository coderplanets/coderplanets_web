import { FC, memo } from 'react'

import type { TArticle, TC11NLayout } from '@/spec'
import { ISSUE_ADDR, API_SERVER_ADDR } from '@/config'
import TopInfo from './TopInfo'
import BottomInfo from './BottomInfo'

import {
  Wrapper,
  InnerWrapper,
  MainInfos,
  BaseInfo,
  Item,
} from '../styles/desktop_view/article_view'

type TProps = {
  viewingArticle: TArticle
  metric: string
  layout: TC11NLayout
}

const BriefView: FC<TProps> = ({ metric, viewingArticle, layout }) => {
  return (
    <Wrapper metric={metric} layout={layout}>
      <InnerWrapper>
        <TopInfo type="article" title={viewingArticle.title} noBottomBorder />
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
      <BottomInfo metric={metric} />
    </Wrapper>
  )
}

export default memo(BriefView)
