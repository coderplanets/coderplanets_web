import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.nav`
  ${css.flexColumn('justify-center')};
  position: relative;
  background: ${theme('banner.bg')};
  border-bottom: ${theme('banner.spliter')};
  min-height: 120px;
  padding-top: 10px;
  padding-bottom: 10px;
`
export const InnerWrapper = styled.div`
  ${css.flex('justify-center')};
  width: 100%;
`
export const BannerContent = styled.div`
  ${css.flex()};
  max-width: ${css.ARTICLE_PAGE_MAX_CONTENT_WIDTH};
  width: 100%;
  padding: 0 5vw;
`
export const Brief = styled.div`
  ${css.flexColumnGrow()};
  width: 60%;
`
export const Desc = styled.div`
  ${css.flex('align-center')};
  margin-top: 5px;
  margin-bottom: 8px;
  font-size: 0.9rem;
  color: ${theme('thread.articleDigest')};
`
export const Avatar = styled.img`
  ${css.circle('25px')};
  margin-right: 5px;
`
