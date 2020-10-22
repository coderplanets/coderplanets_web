import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.nav`
  ${css.flexColumn('justify-end')};
  position: relative;
  background: transparent;
  border-bottom: ${theme('banner.spliter')};
  min-height: 220px;
  margin-bottom: 15px;
`
export const InnerWrapper = styled.div`
  ${css.flex('justify-center')};
  width: 100%;
`
export const BannerContent = styled.div`
  ${css.flex()};
  max-width: ${css.ARTICLE_PAGE_MAX_CONTENT_WIDTH};
  width: 100%;
  padding-left: 10vw;
  padding-right: 6vw;
  /* border: 1px solid tomato; */
`
export const Main = styled.div`
  padding-left: 10px;
`
export const AuthorWrapper = styled.div`
  ${css.flex('align-end', 'justify-end')};
  width: 188px;
`
export const PublishTime = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  margin-bottom: 8px;
  font-size: 14px;
`
export const BottomInfo = styled.div`
  ${css.flex('align-center', 'justify-between')};
  margin-top: 15px;
  padding-bottom: 45px;
  border-bottom: 1px solid;
  border-bottom-color: #004251;
  /* TODO:  tmp */
  width: 680px;
  color: ${theme('thread.articleDigest')};
`
export const PublishDesc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
`
