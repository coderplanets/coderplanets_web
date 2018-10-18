import styled from 'styled-components'

import Img from '../../../components/Img'
import { theme, Animate } from '../../../utils'

export const PrefixIcon = styled(Img)`
  width: 30px;
  height: 30px;
  display: block;
`
export const PrefixSearchIcon = styled(Img)`
  width: 30px;
  height: 30px;
  fill: ${theme('shell.searchIcon')};
  display: block;
`
export const PrefixMagicIcon = styled(Img)`
  width: 30px;
  height: 25px;
  transform: rotate(-30deg);
  display: block;
`
export const LoadingIcon = styled(Img)`
  fill: ${theme('shell.searchIcon')};
  width: 35px;
  height: 35px;
  animation: ${Animate.rotate360} 2s linear infinite;
  display: block;
`
