import styled from 'styled-components'

import Img from '../../../components/Img'
import { cs, theme } from '../../../utils'

export const Wrapper = styled.div`
  width: 10%;
`
export const Icon = styled(Img)`
  fill: ${({ nonFill }) => (nonFill ? '' : theme('shell.searchIcon'))};
  width: 35px;
  height: 35px;
  display: block;
  transform: ${({ reverse }) => (reverse ? 'rotate(180deg)' : '')};
`
export const ThemeDot = styled.div`
  ${cs.circle('35px')};
  background: ${({ bg }) => bg};
`
