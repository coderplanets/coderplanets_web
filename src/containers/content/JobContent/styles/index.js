import styled from 'styled-components'

import { theme, css, WIDTH } from '@/utils'

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
  max-width: ${WIDTH.ARTICLE.PAGE};
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
/* background: ${theme('drawer.articleBg')}; */
export const ArticleWrapper = styled.div`
  font-size: 1.1rem;
  margin-right: 1.6vw;
  background: ${theme('drawer.articleBg')};
  border-radius: 5px;
  padding: 35px 40px;
  min-height: 200px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);

  ${css.media.tablet`
    padding: 30px 10px;
    min-height: 40vh;
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

  ${css.media.tablet`
    margin: 10px;
  `};
`

export const MobileWrapper = styled.div`
  margin-top: 10px;
  ${css.flexColumn('align-center')};
  display: none;
  ${css.media.tablet`
    ${css.flex()};
  `};
`
export const MobileContentCard = styled.div`
  ${css.flex('justify-center')};
  width: 100%;
`
