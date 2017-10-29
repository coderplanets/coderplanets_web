import styled from 'styled-components'

import ReactSVG from 'react-svg'

// import { theme } from '../../../utils/themes'
export const Header = styled.div`
  padding: 5px;
  padding-top: 8px;
  line-height: 2vh;
  border-bottom: 1px solid tomato;
  display: flex;
  flex-direction: row;
`

export const Router = styled.div`flex-grow: 1;`

export const Admin = styled.div`
  margin-right: 10px;
  font-size: xx-small;
`

export const Search = styled.div`
  color: grey;
  margin-right: 10px;
`

export const Notification = styled.div`
  color: grey;
  margin-right: 10px;
`
export const HeaderIcon = styled(ReactSVG)`
  fill: grey;
  width: 22px;
  height: 22px;
  cursor: pointer;
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
