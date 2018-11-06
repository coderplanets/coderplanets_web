import styled from 'styled-components'

import Img from '../../../components/Img'
import { cs } from '../../../utils'

export const Icon = styled(Img)`
  width: 40px;
  height: 40px;
  transform: ${({ reverse }) => (reverse ? 'rotate(180deg)' : '')};
`
export const ThemeDot = styled.div`
  ${cs.circle('35px')};
  background: ${({ bg }) => bg};
`
