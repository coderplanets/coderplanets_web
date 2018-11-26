import styled from 'styled-components'

import Img from '../../../components/Img'
import { cs, theme } from '../../../utils'

export const Wrapper = styled.div`
  width: 10%;
`
export const ThemeIconWrapper = styled.div`
  margin-right: 16px;
`
export const Icon = styled(Img)`
  fill: ${({ nonFill }) => (nonFill ? '' : theme('shell.searchIcon'))};
  width: 35px;
  height: 35px;
  display: block;
  border-radius: ${({ round }) => (round ? '100%' : '4px')};
  margin-left: 4px;
  transform: ${({ reverse }) => (reverse ? 'rotate(180deg)' : '')};
`
export const ThemeDot = styled.div`
  ${cs.circle('35px')};
  background: ${({ bg }) => bg};
`
export const DoraemonIcon = styled(Img)`
  width: 52px;
  height: 52px;
  display: block;
  margin-left: -4px;
`
