import styled from 'styled-components'

import { theme, css } from '@/utils'

import Img from '@/Img'
import CommunityFaceLogo from '@/components/CommunityFaceLogo'
import DotDivider from '@/components/DotDivider'

export const Wrapper = styled.div`
  ${css.flexColumn('align-center')};
  width: 100%;
  margin-top: 15px;
`
export const InnerWrapper = styled.div`
  ${({ metric }) => css.fitPageWidth(metric)};
  width: 100%;
  margin-bottom: ${({ metric }) => (metric === 'article' ? '30px' : 0)};
`
export const MainInfos = styled.footer`
  ${css.flexColumn('align-center')};
  align-items: ${({ center }) => (center ? 'center' : 'flex-start')};
  margin-bottom: 20px;
  ${css.media.tablet`display: none;`};
`
export const CenterLogosWrapper = styled.div`
  ${css.flex('align-both')};
  margin-left: 70px;
  margin-right: 70px;
`
export const SiteLogo = styled(CommunityFaceLogo)`
  ${css.size(20)};
  margin-top: -2px;
`
export const LogoDivider = styled(DotDivider)`
  background: ${theme('footer.text')};
`
export const GithubLogo = styled(Img)`
  fill: ${theme('footer.text')};
  ${css.size(18)};
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
  ${css.flex()};
`
export const Divider = styled.div`
  margin-left: 12px;
  margin-right: 12px;
  color: ${theme('footer.text')};
  opacity: 0.6;
`

export const Item = styled(Link)``
