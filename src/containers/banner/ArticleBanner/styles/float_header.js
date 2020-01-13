import styled from 'styled-components'

import Img from '@components/Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  ${cs.flex('align-both')};
  height: 40px;
  background-color: ${theme('header.fixed')};
  display: ${({ show }) => (show ? 'flex' : 'none')};
  box-shadow: ${theme('preview.shadow')};
  border-bottom: 1px solid;
  border-bottom-color: ${theme('header.spliter')};
  width: 100%;
  max-width: ${cs.ARTICLE_PAGE_MAX_CONTENT_WIDTH};
  position: fixed;
  top: 0;
  z-index: 1;
`
export const InnerWrapper = styled.div`
  ${cs.flex('align-center')};
  width: 100%;
  height: 100%;
  max-width: ${cs.ARTICLE_PAGE_MAX_CONTENT_WIDTH};
  padding-left: 4vw;
  padding-right: 4vw;
`

// 文章的宽度，由 ARTICLE_PAGE_MAX_CONTENT_WIDTH - (Sidebar + paddings)  得来
export const ArticleWrapper = styled.div`
  ${cs.flex('align-center')};
  width: 100%;
  height: 100%;
  max-width: calc(${cs.ARTICLE_PAGE_MAX_CONTENT_WIDTH} - 40%);
`

export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
`

export const ReactionWrapper = styled.div`
  ${cs.flex('align-center')};
`
export const ReactionNum = styled.div`
  color: ${theme('thread.articleTitle')};
`
//   fill: ${theme('thread.articleTitle')};
export const ReactionIcon = styled(Img)`
  fill: ${({ active }) =>
    active ? theme('baseColor.error') : theme('thread.articleTitle')};
  width: 18px;
  height: 18px;
  display: block;
  margin-right: 3px;
`
