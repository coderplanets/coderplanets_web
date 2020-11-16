import styled from 'styled-components'

import { theme, css, WIDTH } from '@/utils'

export const Wrapper = styled.article`
  ${css.flexGrow('justify-center')};
  position: relative;
  padding-top: 20px;
  min-height: 300px;
  width: 100%;

  ${css.media.tablet`
    padding: 8px 0;
  `};
`
export const InnerWrapper = styled.div`
  ${css.flex()};
  width: 100%;
  max-width: ${WIDTH.ARTICLE.PAGE};
  margin-left: ${WIDTH.ARTICLE.CONTENT_OFFSET};
  padding-left: 0;
  padding-right: 0;

  ${css.media.desktopL`
    margin-left: ${WIDTH.ARTICLE.CONTENT_OFFSET_DESKTOPL};
  `}
  ${css.media.laptopL`
    margin-left: ${WIDTH.ARTICLE.CONTENT_OFFSET_LAPTOPL};
  `}
`
export const MainWrapper = styled.div`
  flex-grow: 1;
  max-width: ${({ metric }) => css.getContentMaxWidth(metric)};

  ${css.media.tablet`
    width: 100%;
  `};
`
export const SidebarWrapper = styled.div`
  margin-top: 4px;
`
/* background: ${theme('drawer.articleBg')}; */
export const ArticleWrapper = styled.div`
  font-size: 15px;
  /* background: ${theme('drawer.articleBg')}; */
  /* border-radius: 5px; */
  background: transparent;
  
  min-height: 200px;
`
export const BodyHeaderWrapper = styled.div`
  margin-top: -18px;
  margin-bottom: 18px;
`
export const CommentsWrapper = styled.div`
  margin-top: 50px;
`
