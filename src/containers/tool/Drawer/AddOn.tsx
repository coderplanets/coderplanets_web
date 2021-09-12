import { FC, memo } from 'react'

import { previewArticle } from '@/utils/helper'
import { SpaceGrow } from '@/components/Common'
import GotoTop from '@/components/GotoTop'
import IconButton from '@/components/Buttons/IconButton'

import type { TArticleNavi } from './spec'
import {
  Wrapper,
  CloseWrapper,
  SwitchArticleWrapper,
  SwitchBlock,
  ArticleWrapper,
  IndexDesc,
  ArticleTitle,
  GotoTopWrapper,
} from './styles/add_on'

import { closeDrawer, naviToArticle } from './logic'

type TProps = {
  type: string
  articleNavi?: TArticleNavi
}

const AddOn: FC<TProps> = ({ type, articleNavi }) => {
  // console.log('-- type: ', type)
  return (
    <Wrapper>
      <CloseWrapper type={type}>
        <IconButton
          path="shape/close.svg"
          onClick={closeDrawer}
          size={26}
          dimWhenIdle
        />
        <IconButton
          path="article/share.svg"
          size={19}
          mTop={7}
          mLeft={-1}
          hint="分享本文"
          hintPlacement="bottom"
          dimWhenIdle
        />
      </CloseWrapper>

      <SwitchArticleWrapper show>
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
            <ArticleWrapper
              onClick={() => naviToArticle(articleNavi.next)}
              next
            >
              <IndexDesc>下一篇</IndexDesc>
              <ArticleTitle>{articleNavi.next.title}</ArticleTitle>
            </ArticleWrapper>
          </SwitchBlock>
        )}
      </SwitchArticleWrapper>
      <SpaceGrow />
      <GotoTopWrapper>
        <GotoTop type="drawer" />
      </GotoTopWrapper>
    </Wrapper>
  )
}

export default memo(AddOn)
