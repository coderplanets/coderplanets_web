import styled from 'styled-components'

import { theme, cs } from '@/utils'

export const Wrapper = styled.nav`
  ${cs.flexColumn('justify-center')};
  position: relative;
  /* ${theme('banner.bg')}; */
  background: #08303c;  /* TODO: same as comment background */
  border-bottom: ${theme('banner.spliter')};
  padding: 30px 40px;
  padding-top: 0px;
  min-height: 160px;
  margin-bottom: 5px;
`
export const InnerWrapper = styled.div`
  ${cs.flex('justify-center')};
  width: 100%;
`
export const BannerContent = styled.div`
  ${cs.flex()};
  max-width: ${cs.ARTICLE_PAGE_MAX_CONTENT_WIDTH};
  width: 100%;
`
export const Brief = styled.div`
  ${cs.flexColumnGrow()};
  width: 60%;
`
export const Desc = styled.div`
  ${cs.flex('align-center')};
  margin-top: 5px;
  margin-bottom: 8px;
  font-size: 0.9rem;
  color: ${theme('thread.articleDigest')};
`
export const Avatar = styled.img`
  ${cs.circle('25px')};
  margin-right: 5px;
`
