import styled from 'styled-components'

import { theme, cs } from '@/utils'
import Img from '@/Img'
import DotDividerBase from '@/components/DotDivider'
import CommunityFaceLogo from '@/components/CommunityFaceLogo'

export const Breadcrumbs = styled.div`
  ${cs.flex('align-center')};
  max-width: 650px;
  height: 100%;
  ${cs.media.mobile`
    margin-right: 0;
  `};
`
export const Logo = styled(CommunityFaceLogo)`
  height: 22px;
  width: 22px;
  margin-top: -5px;
  opacity: 0.7;
`
export const LogoLink = styled.a`
  margin-right: 10px;
`
export const DotDivider = styled(DotDividerBase)`
  background-color: ${theme('banner.desc')};
  margin-right: 0;
  width: 4px;
  height: 4px;
`
// font-family: cursive; // not general
export const LogoText = styled.a`
  color: ${theme('logoText')};
  font-family: Orbitron, Cursive, Helvetica;
  font-weight: bolder;
  letter-spacing: 1.5px;
  font-size: 0.9rem;
  margin-left: 6px;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: ${theme('logoText')};
  }
`
export const BetaLogo = styled(Img)`
  fill: #ef8145;
  height: 40px;
  width: 40px;
  margin-top: 5px;
  margin-left: 3px;
`
export const UL = styled.ul`
  &:before {
    content: ' ';
    display: table;
  }
  &:after {
    content: ' ';
    display: table;
    clear: both;
  }
`
export const LI = styled.li`
  float: left;
  padding: 0 5px;
  min-width: 15%;
  max-width: 30%;
  border-bottom: 1px solid;
  border-bottom-color: ${({ active }) =>
    active ? theme('navigator.activeBottom') : ''};
  border-right: 1px solid;
  border-right-color: ${theme('navigator.borderRight')};
  &:hover {
    background: ${theme('navigator.hoverBg')};
  }
`
export const A = styled.a`
  position: relative;
  display: block;
  padding: 10px;
  padding-right: 0 !important;
  font-size: 1em;
  text-align: center;
  color: #aaa;
  cursor: pointer;
`

export const ShortAddr = styled.div`
  padding: 5px 10px;
  color: ${theme('banner.title')};
  font-weight: bolder;
  &:hover {
    cursor: pointer;
  }
`
export const ShortDesc = styled.span`
  color: ${theme('banner.desc')};
  margin-right: 1px;
  font-weight: normal;
`
