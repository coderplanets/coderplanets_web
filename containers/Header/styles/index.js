import styled from 'styled-components'
import ReactSVG from 'react-svg'

import { theme } from '../../../utils/themes'

export const Header = styled.div`
  padding: 5px;
  padding-top: 8px;
  line-height: 2vh;
  display: flex;
  flex-direction: row;
  background: ${theme('header.bg')};
  border-bottom: ${theme('header.spliter')};
`

export const Router = styled.div`flex-grow: 1;`

export const Admin = styled.div`
  margin-right: 10px;
  font-size: xx-small;
  &:after {
    content: '⁝';
    color: ${theme('header.fg')};
    margin-left: 5px;
  }
`

export const Search = styled.div`color: ${theme('header.fg')};`

export const Notification = styled.div``

export const HeaderIcon = styled(ReactSVG)`
  fill: ${theme('header.fg')};
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-top: 2px;
  margin-right: 12px;
`
export const User = styled.div`
  color: grey;
  margin-right: 20px;
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
