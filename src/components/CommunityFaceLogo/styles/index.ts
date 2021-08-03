import styled from 'styled-components'

import { theme } from '@/utils/themes'
import Img from '@/Img'

export const Logo = styled(Img)<{ noFill?: boolean }>`
  fill: ${({ noFill }) => (noFill ? '' : theme('banner.desc'))};
  display: block;
`

export const HomeLogo = styled(Logo)`
  transform: rotate(20deg);
`
