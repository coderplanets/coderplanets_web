import { FC, memo } from 'react'

import type { TArticleNavi } from '../spec'

import {
  Wrapper,
  LeftSwitchBlock,
  LeftArrow,
  RightSwitchBlock,
  RightArrow,
  IndexWrapper,
  LeftIndexWrapper,
  RightIndexWrapper,
} from '../styles/add_on/article_navi'

import { naviToArticle } from '../logic'

type TProps = {
  articleNavi?: TArticleNavi
  // show?: boolean
}

const ArticleNavi: FC<TProps> = ({ articleNavi }) => {
  // console.log('-- type: ', type)
  return (
    <Wrapper>
      {articleNavi?.previous && (
        <LeftSwitchBlock onClick={() => naviToArticle(articleNavi.previous)}>
          <LeftArrow />
          <IndexWrapper>
            <LeftIndexWrapper>上一篇</LeftIndexWrapper>
          </IndexWrapper>
        </LeftSwitchBlock>
      )}
      {articleNavi?.next && (
        <RightSwitchBlock onClick={() => naviToArticle(articleNavi.next)}>
          <RightArrow />
          <IndexWrapper>
            <RightIndexWrapper>下一篇</RightIndexWrapper>
          </IndexWrapper>
        </RightSwitchBlock>
      )}
    </Wrapper>
  )
}

export default memo(ArticleNavi)
