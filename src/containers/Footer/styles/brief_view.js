import styled from 'styled-components'

import CommunityFaceLogo from '@/components/CommunityFaceLogo'
import { theme, cs } from '@/utils'

export const Wrapper = styled.footer`
  ${cs.flexColumn('align-center')};
  width: 100%;
  margin-top: 15px;
`
export const InnerWrapper = styled.div`
  max-width: ${cs.MAX_CONTENT_WIDTH};
  width: 100%;
  padding: 0 5vw;
`
export const MainInfos = styled.footer`
  ${cs.flexColumn('align-center')};
  margin-bottom: 20px;
  ${cs.media.tablet`display: none;`};
`
export const SiteLogo = styled(CommunityFaceLogo)`
  width: 20px;
  height: 20px;
  display: block;
  margin-left: 70px;
  margin-right: 70px;
  margin-top: -2px;
`
const Link = styled.a`
  text-decoration: none;
  font-weight: bolder;
  color: ${theme('footer.text')};
  transition: color 0.3s;
  &:hover {
    text-decoration: underline;
    color: ${theme('footer.hover')};
  }
`
export const Support = styled.div`
  font-weight: bolder;
  color: ${theme('footer.text')};
  transition: color 0.3s;
  &:hover {
    cursor: pointer;
    color: ${theme('footer.hover')};
  }
`

export const BaseInfo = styled.div`
  ${cs.flex()};
  margin-top: 20px;
`

export const Divider = styled.div`
  margin-left: 12px;
  margin-right: 12px;
  color: ${theme('footer.text')};
  opacity: 0.6;
`

export const Item = styled(Link)``
