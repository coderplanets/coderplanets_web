import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'
import Img from '@/Img'

export { SiteLink } from './main_entries'

export const Icon = styled(Img)`
  fill: ${theme('banner.desc')};
  margin-left: 5px;
  ${css.size(10)};
`
export const MobileIcon = styled(Icon)`
  margin-left: 5px;
  ${css.size(14)};
`
