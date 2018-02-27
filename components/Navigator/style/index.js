import styled from 'styled-components'
import ReactSVG from 'react-svg'

import { theme } from '../../../utils'

export const Breadcrumbs = styled.div`
  max-width: 520px;
  margin-left: 3vw;
  height: 100%;
  display: flex;
  align-items: center;
`
export const Logo = styled(ReactSVG)`
  height: 22px;
  width: 22px;
  margin-top: 4px;
`
export const LogoText = styled.div`
  margin-left: 6px;
  color: #5c868b;
`
export const BetaText = styled.div`
  border: 1px solid #e49b8e;
  color: #e49b8e;
  border-radius: 2px;
  margin-left: 5px;
  padding: 0px 5px;
  font-size: 0.8em;
  text-align: center;
  align-self: center;
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
  border-bottom: ${props =>
    props.active ? theme('navigator.activeBottom', props) : ''};
  border-right: ${theme('navigator.borderRight')};
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
