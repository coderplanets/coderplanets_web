import styled from 'styled-components'

import { theme, cs } from '@/utils'

export const Wrapper = styled.article`
  ${cs.flexGrow('justify-center')};
  padding: 20px;
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
export const ArticleWrapper = styled.div`
  font-size: 1.1rem;
  margin-right: 1.6vw;
  background: ${theme('preview.articleBg')};
  border-radius: 5px;
  padding-top: 30px;
  min-height: 40vh;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  ${cs.media.tablet`
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
  ${cs.media.tablet`
    margin: 5px;
  `};
`

export const MobileWrapper = styled.div`
  ${cs.flex()};
  margin-top: 15px;
  width: 100%;
  display: none;

  ${cs.media.tablet`
    ${cs.flex('justify-center')}
  `};
`
