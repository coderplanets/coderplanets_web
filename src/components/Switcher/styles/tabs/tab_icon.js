import styled from 'styled-components'

import Img from '@Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
`
export const Icon = styled(Img)`
  fill: ${({ active }) =>
    active === 1 ? theme('tabs.headerActive') : theme('tabs.header')};
  width: 15px;
  height: 15px;
  margin-right: 5px;
  display: block;
`
