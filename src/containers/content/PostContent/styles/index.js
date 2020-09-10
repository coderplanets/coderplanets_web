import styled from 'styled-components'

import { theme, cs } from '@/utils'

export const Wrapper = styled.article`
  ${cs.flexGrow('justify-center')};
  padding-top: 20px;
  min-height: 300px;

  ${cs.media.tablet`
    padding: 8px 0;
  `};
`
export const InnerWrapper = styled.div`
  ${cs.flex()};
  width: 100%;
  max-width: ${cs.ARTICLE_PAGE_MAX_CONTENT_WIDTH};
  padding: 0 6vw;
  ${cs.media.desktop`
    padding: 0 4vw;
  `};
  ${cs.media.mobile`
    padding: 0 3vw;
  `};
`
export const MainWrapper = styled.div`
  flex-grow: 1;

  ${cs.media.tablet`
    width: 100%;
  `};
`
export const SidebarWrapper = styled.div`
  min-width: 250px;
  ${cs.media.mobile`
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
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  min-height: 200px;
  ${cs.media.mobile`
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

  ${cs.media.mobile`
    margin: 5px;
  `};
`
