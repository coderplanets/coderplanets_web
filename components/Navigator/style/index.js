import styled from 'styled-components'

import { theme } from '../../../utils'

export const Breadcrumbs = styled.div`
  max-width: 520px;
  margin-left: 3vw;
  height: 100%;
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
