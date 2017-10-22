import styled from 'styled-components'

import { theme } from '../../../utils/functions'

import searchIcon from '../../../static/search.svg'
import userIcon from '../../../static/user.svg'
import notificationIcon from '../../../static/notification.svg'

export const Body = styled.div`
  padding-left: 56px;
  position: relative;
  height: 100vh;
  background: ${theme('body_bg')};
  transition: background-color 0.3s;
  display: flex;
  flex-direction: column;
`

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
  border: 1px solid grey;
  margin-right: 10px;
  font-size: xx-small;
  padding: 2px 6px;
  cursor: pointer;
`

export const Search = styled.div`
  color: grey;
  margin-right: 10px;
`

export const SearchIcon = styled(searchIcon)`
  fill: grey;
  width: 22px;
  height: 22px;
  cursor: pointer;
`

export const Notification = styled.div`
  color: grey;
  margin-right: 10px;
`
export const NotificationIcon = styled(notificationIcon)`
  fill: grey;
  width: 22px;
  height: 22px;
  cursor: pointer;
`
export const User = styled.div`
  color: grey;
  margin-right: 20px;
`

export const UserIcon = styled(userIcon)`
  fill: grey;
  width: 22px;
  height: 22px;
  cursor: pointer;
`
export const Banner = styled.div`
  padding: 5px;
  line-height: 15vh;
  border-bottom: 1px solid tomato;
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
