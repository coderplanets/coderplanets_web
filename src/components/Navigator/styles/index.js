import styled from 'styled-components'

import { theme, css } from '@/utils'
import CommunityFaceLogo from '@/components/CommunityFaceLogo'

export const Breadcrumbs = styled.div`
  ${css.flex('align-center')};
  max-width: 650px;
  height: 100%;
  ${css.media.mobile`
    margin-right: 0;
  `};
`
export const Logo = styled(CommunityFaceLogo)`
  height: 20px;
  width: 20px;
  margin-top: -1px;
`
export const LogoLink = styled.a`
  ${css.flex('align-center')};
  margin-right: 10px;
  text-decoration: none;
  cursor: pointer;
`
export const LineDivider = styled.div`
  background-color: ${theme('banner.desc')};
  margin-left: 5px;
  margin-right: 3px;
  width: 1px;
  height: 12px;
  margin-top: 3px;
  opacity: 0;
`
// font-family: cursive; // not general
export const LogoText = styled.a`
  color: ${theme('banner.desc')};
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 14px;
  margin-left: 6px;
  margin-top: 2px;

  &:hover {
    color: ${theme('banner.desc')};
  }
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
