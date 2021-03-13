import styled from 'styled-components'

import { theme } from '@/utils'
import Img from '@/Img'

export const Logo = styled(Img)<{ nonFill: boolean }>`
  fill: ${({ nonFill }) => (nonFill ? '' : theme('banner.desc'))};
  display: block;
`

export const holder = 1
