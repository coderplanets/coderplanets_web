import styled from 'styled-components'
import ReactSVG from 'react-svg'

import { theme } from '../../../utils'
import { Button } from '../../../components'

// background: ${theme('header.bg')};
export const Header = styled.div`
  height: 33px;
  display: flex;
  flex-direction: row;
  background: ${props =>
    props.fixed ? theme('header.fixed') : theme('header.bg')};

  border-bottom: ${theme('header.spliter')};
  align-items: center;
  padding: 0 4vw;
`

export const RouterWrapper = styled.div`
  flex-grow: 1;
`

// color: ${theme('header.fg')};
// margin-right: 25px;
export const Admin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const DividerIcon = styled(ReactSVG)`
  fill: ${theme('header.fg')};
  width: 18px;
  height: 20px;
  margin-top: 2px;
  margin-left: 3px;
  margin-right: 3px;
`

export const StateButton = styled(Button)`
  width: 80px;
  display: flex;
`
export const StateIcon = styled(ReactSVG)`
  width: 12px;
  height: 100%;
  cursor: pointer;
  margin-right: 8px;
  margin-top: 2px;
`

export const HeaderIcon = styled(ReactSVG)`
  fill: ${theme('header.fg')};
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-top: 2px;
  margin-right: 12px;
`

export const Operations = styled.div`
  display: flex;
`

export const Search = styled.div`
  color: ${theme('header.fg')};
`

export const Notification = styled.div``
export const User = styled.div`
  margin-right: 20px;
`
