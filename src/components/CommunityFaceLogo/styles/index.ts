import styled from 'styled-components'

import { theme } from '@/utils/themes'
import Img from '@/Img'
import SiteLogo from '@/icons/CPLogo'

export const Logo = styled(Img)<{ noFill?: boolean }>`
  fill: ${({ noFill }) => (noFill ? '' : theme('banner.desc'))};
  display: block;
`

export const HomeLogo = styled(SiteLogo)`
  fill: #007fa8;
  /* transform: rotate(20deg); */
`
