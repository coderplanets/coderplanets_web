import styled from 'styled-components'

import { Img } from '../../../components'
// import { theme } from '../../../utils'

export const Icon = styled(Img)`
  width: 40px;
  height: 40px;
  transform: ${({ reverse }) => (reverse ? 'rotate(180deg)' : '')};
`
export const ThemeDot = styled.div`
  width: 35px;
  height: 35px;
  background: ${({ bg }) => bg};
  border-radius: 50%;
`
