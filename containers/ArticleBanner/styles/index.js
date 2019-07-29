import styled from 'styled-components'

import { theme, cs } from '@utils'

export const Wrapper = styled.nav`
  ${cs.flexColumn('justify-center')};
  position: relative;
  background: ${theme('banner.bg')};
  border-bottom: ${theme('banner.spliter')};
  min-height: 100px;
  padding-top: 10px;
  padding-bottom: 10px;

  ${cs.media.mobile`
    min-height: 100px;
  `};
`
export const InnerWrapper = styled.div`
  ${cs.flex('justify-center')};
  width: 100%;
`
export const BannerContent = styled.div`
  ${cs.flex()};
  max-width: ${cs.MAX_CONTENT_WIDTH};
  width: 100%;
  padding: 0 6vw;

  ${cs.media.mobile`
    padding: 0;
    padding-right: 10px;
  `};
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
