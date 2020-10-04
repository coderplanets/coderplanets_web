import styled from 'styled-components'

import Img from '@/Img'
import { cs, theme } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};

  ${cs.media.mobile`
    display: none;
  `}
`
export const Icon = styled(Img)`
  fill: ${({ active }) =>
    active === 1 ? theme('tabs.headerActive') : theme('tabs.header')};
  width: 15px;
  height: 15px;
  margin-right: 5px;
  display: block;

  ${cs.media.mobile`
    width: 13px;
    height: 13px;
  `}
`
