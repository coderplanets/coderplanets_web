import styled from 'styled-components'

import Img from '../../Img'
import { theme } from '../../../utils'

export const Logo = styled(Img)`
  fill: ${({ nonFill }) => (nonFill ? '' : theme('banner.desc'))};
  display: block;
`

export const holder = 1
