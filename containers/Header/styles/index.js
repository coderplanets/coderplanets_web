import styled from 'styled-components'
import ReactSVG from 'react-svg'

import { theme } from '../../../utils/themes'

export const Header = styled.div`
  line-height: 1.6vh;
  display: flex;
  flex-direction: row;
  background: ${theme('header.bg')};
  border-bottom: ${theme('header.spliter')};
`

export const Router = styled.div`
  flex-grow: 1;
`

export const Admin = styled.div`
  margin-right: 25px;
  font-size: xx-small;
  position: relative;
  margin-top: 1px;
  &:after {
    content: '⁝';
    position: absolute;
    top: 12px;
    font-size: large;
    color: ${theme('header.fg')};
    margin-left: 5px;
  }
`

export const Search = styled.div`
  margin-top: 0.8vh;
  color: ${theme('header.fg')};
`

export const Notification = styled.div`
  margin-top: 0.8vh;
`

export const StateIcon = styled(ReactSVG)`
  width: 12px;
  height: 100%;
  cursor: pointer;
  margin-right: 10px;
  margin-top: 1px;
`

export const HeaderIcon = styled(ReactSVG)`
  fill: ${theme('header.fg')};
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-top: 2px;
  margin-right: 12px;
`
export const User = styled.div`
  margin-right: 20px;
  margin-top: 0.8vh;
`
export const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background: transparent;
  cursor: pointer;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
  &:focus {
    outline: 0;
  }
`
