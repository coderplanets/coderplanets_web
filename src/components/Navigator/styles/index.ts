import styled from 'styled-components'

import type { TActive, TC11NLayout } from '@/spec'
import { C11N } from '@/constant'

import { theme } from '@/utils/themes'
import css from '@/utils/css'
import animate from '@/utils/animations'
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
  ${css.size(16)};
`
export const LogoLink = styled.a<{ layout: TC11NLayout }>`
  ${css.flex('align-center')};
  margin-right: ${({ layout }) => (layout === C11N.HOLY_GRAIL ? 0 : '10px')};
  text-decoration: none;
  cursor: pointer;
`
export const LogoMargin = styled.div<{ layout: TC11NLayout }>`
  margin-right: ${({ layout }) =>
    layout === C11N.HOLY_GRAIL ? '42px' : '32px'};
`
export const LogoText = styled.a`
  color: ${theme('header.fg')};
  font-weight: bold;
  font-family: sans-serif;
  letter-spacing: 1px;
  font-size: 16px;
  margin-left: 3px;
  margin-top: 2px;
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
  animation: ${animate.breath} 5s linear infinite;
`
export const ActionText = styled.div`
  font-size: 14px;
  color: ${theme('banner.desc')};
  margin-left: 10px;
  margin-top: 2px;
`
