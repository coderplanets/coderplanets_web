import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.article`
  ${css.flexGrow('justify-center')};
  padding-top: 20px;
  min-height: 300px;

  ${css.media.tablet`
    padding: 8px 0;
  `};
`
export const InnerWrapper = styled.div`
  ${css.flex()};
  width: 100%;
  max-width: ${css.ARTICLE_PAGE_MAX_CONTENT_WIDTH};
  padding-left: 10vw;
  padding-right: 6vw;
  ${css.media.desktop`
    padding: 0 4vw;
  `};
  ${css.media.mobile`
    padding: 0 3vw;
  `};
`
export const MainWrapper = styled.div`
  flex-grow: 1;

  ${css.media.tablet`
    width: 100%;
  `};
`
export const SidebarWrapper = styled.div`
  min-width: 160px;
  ${css.media.mobile`
    display: none;
  `};
`
/* background: ${theme('drawer.articleBg')}; */
export const ArticleWrapper = styled.div`
  font-size: 15px;
  margin-right: 1.6vw;
  /* background: ${theme('drawer.articleBg')}; */
  /* border-radius: 5px; */
  background: transparent;
  padding: 10px;
  min-height: 200px;
  ${css.media.mobile`
    background: #08303c;  /* TODO: same as comment background */
    padding: 26px;
    padding-top: 50px;
    min-height: 20vh;
    margin-right: 0;
  `};
`

export const BodyHeaderWrapper = styled.div`
  margin-top: -18px;
  margin-bottom: 18px;
`

export const CommentsWrapper = styled.div`
  margin: 30px 0;
  margin-right: 25px;

  ${css.media.mobile`
    margin: 5px;
  `};
`
