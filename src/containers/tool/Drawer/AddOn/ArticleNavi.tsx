import { FC, memo } from 'react'

import IconButton from '@/widgets/Buttons/IconButton'

import type { TArticleNavi } from '../spec'

import {
  Wrapper,
  SwitchBlock,
  ArticleWrapper,
  IndexDesc,
  ArticleTitle,
} from '../styles/add_on/article_navi'

import { naviToArticle } from '../logic'

type TProps = {
  articleNavi?: TArticleNavi
  // show?: boolean
}

const ArticleNavi: FC<TProps> = ({ articleNavi }) => {
  // console.log('-- type: ', type)
  return (
    <Wrapper show>
      {articleNavi?.previous && (
        <SwitchBlock>
          <IconButton
            path="shape/previous-article.svg"
            size={23}
            mRight={0}
            mLeft={2}
            onClick={() => naviToArticle(articleNavi.previous)}
            dimWhenIdle
          />
          <ArticleWrapper onClick={() => naviToArticle(articleNavi.previous)}>
            <IndexDesc>上一篇</IndexDesc>
            <ArticleTitle>{articleNavi.previous.title}</ArticleTitle>
          </ArticleWrapper>
        </SwitchBlock>
      )}
      {articleNavi?.next && (
        <SwitchBlock>
          <IconButton
            path="shape/next-article.svg"
            size={23}
            mTop={10}
            mRight={6}
            onClick={() => naviToArticle(articleNavi.next)}
            dimWhenIdle
          />
          <ArticleWrapper onClick={() => naviToArticle(articleNavi.next)} next>
            <IndexDesc>下一篇</IndexDesc>
            <ArticleTitle>{articleNavi.next.title}</ArticleTitle>
          </ArticleWrapper>
        </SwitchBlock>
      )}
    </Wrapper>
  )
}

export default memo(ArticleNavi)
