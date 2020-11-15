import styled from 'styled-components'

import Img from '@/Img'
import { css, theme, animate } from '@/utils'

export const PrefixIcon = styled(Img)`
  ${css.size(30)};
  display: block;
`
export const PrefixSearchIcon = styled(Img)`
  ${css.size(25)};
  fill: ${theme('shell.searchIcon')};
  display: block;
`
// transform: rotate(-30deg);
export const PrefixMagicIcon = styled(Img)`
  ${css.size(42)};
  margin-left: -5px;
  margin-top: 3px;
  display: block;
`
export const LoadingIcon = styled(Img)`
  fill: ${theme('shell.searchIcon')};
  ${css.size(35)};
  animation: ${animate.rotate360} 1s linear infinite;
  display: block;
`
