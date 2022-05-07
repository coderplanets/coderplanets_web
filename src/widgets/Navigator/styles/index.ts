import styled from 'styled-components'

import type { TActive } from '@/spec'

import css, { theme, animate } from '@/utils/css'
import SiteLogo from '@/icons/CPLogo' // TODO:
// import CommunityFaceLogo from '@/widgets/CommunityFaceLogo'

export const Breadcrumbs = styled.div`
  ${css.flex('align-center')};
  max-width: 650px;
  width: 100%;
  height: 100%;
  position: relative;

  ${css.media.mobile`
    margin-right: 0;
  `};
`
export const Logo = styled(SiteLogo)`
  fill: #007fa6;
  ${css.size(16)};
`
export const LogoLink = styled.div`
  position: absolute;
  left: -220px;
  top: 15px;

  ${css.flex('align-center')};
  cursor: pointer;
`
export const LogoMargin = styled.div`
  margin-right: 32px;
`
export const LogoText = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 16px;
  margin-left: 8px;
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
export const LI = styled.li<TActive>`
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
export const OfflineWrapper = styled.div`
  ${css.flexColumn()};
  background: ${theme('baseColor.red')};
  color: ${theme('header.bg')};
  margin-left: 20px;
  padding: 0 10px;
  border-radius: 4px;
  /* animation: ${animate.breath} 5s linear infinite; */
`
export const ActionText = styled.div`
  font-size: 14px;
  color: ${theme('banner.desc')};
  margin-left: 10px;
  margin-top: 2px;
`
