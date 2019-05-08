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
export const BannerContent = styled.div`
  ${cs.flex()};
  margin-left: 8%;
  margin-right: 8%;

  ${cs.media.mobile`
    margin-left: 4%;
    margin-right: 3%;
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
