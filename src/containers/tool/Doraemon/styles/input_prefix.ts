import styled from 'styled-components'

import Img from '@/Img'
import css, { theme, animate } from '@/utils/css'

export const PrefixIcon = styled(Img)`
  ${css.size(30)};
`
export const PrefixSearchIcon = styled(Img)`
  ${css.size(25)};
  fill: ${theme('shell.searchIcon')};
`
// transform: rotate(-30deg);
export const PrefixMagicIcon = styled(Img)`
  ${css.size(42)};
  margin-left: -5px;
  margin-top: 3px;
`
export const LoadingIcon = styled(Img)`
  fill: ${theme('shell.searchIcon')};
  ${css.size(35)};
  animation: ${animate.rotate360} 1s linear infinite;
`
