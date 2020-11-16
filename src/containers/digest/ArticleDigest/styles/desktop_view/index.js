import styled from 'styled-components'

import { theme, css, WIDTH } from '@/utils'

export const Wrapper = styled.nav`
  ${css.flexColumn('justify-end')};
  position: relative;
  background: transparent;
  border-bottom: ${theme('banner.spliter')};
  min-height: 251px;
  margin-bottom: 15px;
  width: 100%;

  ${css.media.laptopL`
    min-height: 230px;
  `}
`
export const InnerWrapper = styled.div`
  ${css.flex('justify-center')};
  width: 100%;
`
export const BannerContent = styled.div`
  ${css.flex()};
  max-width: ${WIDTH.ARTICLE.PAGE};
  width: 100%;
  margin-left: ${WIDTH.ARTICLE.CONTENT_OFFSET};

  ${css.media.desktopL`
    margin-left: ${WIDTH.ARTICLE.CONTENT_OFFSET_DESKTOPL};
  `}
  ${css.media.laptopL`
    margin-left: ${WIDTH.ARTICLE.CONTENT_OFFSET_LAPTOPL};
  `}
`
export const Main = styled.div`
  width: ${WIDTH.ARTICLE.CONTENT};
`
export const AuthorWrapper = styled.div`
  ${css.flex('align-start', 'justify-center')};
  width: ${WIDTH.ARTICLE.STICKER};
  margin-top: 32px;

  ${css.media.laptopL`
    width: ${WIDTH.ARTICLE.STICKER_LAPTOPL};
  `}
`
export const BottomInfo = styled.div`
  ${css.flex('align-end', 'justify-between')};
  margin-top: 15px;
  padding-bottom: 45px;
  border-bottom: 1px solid;
  border-bottom-color: #004251;
  width: 100%;
  color: ${theme('thread.articleDigest')};
`
export const PublishDesc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
  border-left: 4px solid;
  border-left-color: #175473;
  padding-left: 8px;
  margin-left: 2px;

  &:hover {
    cursor: pointer;
    color: ${theme('thread.articleTitle')};
  }
  transition: color 0.25s;
`
