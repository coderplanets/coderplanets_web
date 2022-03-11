import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import ArrowSVG from '@/icons/ArrowSolid'

export { SiteLink } from './main_entries'

export const ArrowIcon = styled(ArrowSVG)`
  fill: ${theme('banner.desc')};
  margin-left: 5px;
  ${css.size(10)};
  transform: rotate(90deg);
`
export const MobileIcon = styled(ArrowSVG)`
  margin-left: 5px;
  ${css.size(14)};
  transform: rotate(90deg);
`
