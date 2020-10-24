import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.nav`
  ${css.flexColumn('justify-center')};
  position: relative;
  padding: 30px 40px;
  padding-top: 0px;
  min-height: 160px;
  margin-bottom: 5px;
`
export const InnerWrapper = styled.div`
  ${css.flex('justify-center')};
  width: 100%;
`
export const Title = styled.div`
  font-size: 24px;
  color: ${theme('thread.articleTitle')};
`
export const BannerContent = styled.div`
  ${css.flex()};
  max-width: ${css.ARTICLE_PAGE_MAX_WIDTH};
  width: 100%;
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
