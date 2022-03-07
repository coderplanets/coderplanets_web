import { FC, memo } from 'react'

import IconButton from '@/widgets/Buttons/IconButton'

import type { TArticleNavi } from '../spec'

import {
  Wrapper,
  LeftSwitchBlock,
  RightSwitchBlock,
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
        <LeftSwitchBlock>
          <IconButton
            path="shape/arrow-simple.svg"
            size={23}
            mRight={0}
            mLeft={2}
            onClick={() => naviToArticle(articleNavi.previous)}
            dimWhenIdle
          />
          <IndexWrapper onClick={() => naviToArticle(articleNavi.previous)}>
            <LeftIndexWrapper>上一篇</LeftIndexWrapper>
          </IndexWrapper>
        </LeftSwitchBlock>
      )}
      {articleNavi?.next && (
        <RightSwitchBlock>
          <IconButton
            path="shape/arrow-simple.svg"
            size={23}
            mTop={2}
            mRight={4}
            onClick={() => naviToArticle(articleNavi.next)}
            dimWhenIdle
          />
          <IndexWrapper onClick={() => naviToArticle(articleNavi.next)}>
            <RightIndexWrapper>下一篇</RightIndexWrapper>
          </IndexWrapper>
        </RightSwitchBlock>
      )}
    </Wrapper>
  )
}

export default memo(ArticleNavi)
