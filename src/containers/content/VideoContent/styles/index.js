import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.article`
  ${css.flexGrow('justify-center')};
  padding: 20px;
  min-height: 300px;
  ${css.media.tablet`
    padding: 8px 0;
  `};
`
export const InnerWrapper = styled.div`
  ${css.flex()};
  width: 100%;
  max-width: ${css.ARTICLE_PAGE_MAX_WIDTH};
  padding: 0 6vw;
  ${css.media.desktop`
    padding: 0 4vw;
  `};
`
export const MainWrapper = styled.div`
  flex-grow: 1;
  ${css.media.tablet`
    width: 100%;
  `};
`
export const SidebarWrapper = styled.div`
  min-width: 250px;
  ${css.media.mobile`
    display: none;
  `};
`
export const ArticleWrapper = styled.div`
  font-size: 1.1rem;
  margin-right: 1.6vw;
  background: ${theme('drawer.articleBg')};
  border-radius: 5px;
  padding-top: 30px;
  min-height: 40vh;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  ${css.media.tablet`
    padding: 30px 20px;
    margin-right: 0;
  `};
`
export const BodyHeaderWrapper = styled.div`
  margin-top: -18px;
  margin-bottom: 5px;
  padding-left: 20px;
`

export const CommentsWrapper = styled.div`
  margin-top: 30px;
  margin: 25px;
  ${css.media.tablet`
    margin: 5px;
  `};
`

export const MobileWrapper = styled.div`
  ${css.flex()};
  margin-top: 15px;
  width: 100%;
  display: none;

  ${css.media.tablet`
    ${css.flex('justify-center')}
  `};
`
