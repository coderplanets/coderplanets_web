import styled from 'styled-components'

// import Img from 'components/Img'
import { theme, cs } from 'utils'
import { BaseBar } from './index'

export const Wrapper = styled(BaseBar)`
  ${cs.flex()};
  position: relative;
  padding: 10px;
  height: 45px;
  padding-left: 20px;
  padding-right: 20px;
`
export const Info = styled.div`
  ${cs.flexGrow()};
`

export const Title = styled.div`
  flex-grow: 1;
  color: ${theme('shell.desc')};
`
export const Number = styled.span`
  color: ${theme('shell.title')};
  margin-left: 3px;
  margin-right: 3px;
`
export const Desc = styled.div`
  color: ${theme('shell.desc')};
`
