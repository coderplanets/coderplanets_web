import styled from 'styled-components'

import Img from '../../Img'
import { theme, cs } from '../../../utils'

export const Breadcrumbs = styled.div`
  ${cs.flex('align-center')};
  max-width: 520px;
  margin-left: 3vw;
  height: 100%;
`
export const Logo = styled(Img)`
  height: 22px;
  margin-top: 1px;
  width: 22px;
  opacity: 0.7;
`
export const LogoText = styled.div`
  color: ${theme('logoText')};
  font-family: cursive;
  font-weight: bolder;
  letter-spacing: 0.5px;
  font-size: 1rem;
  margin-left: 6px;
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
