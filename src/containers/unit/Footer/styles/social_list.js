import styled from 'styled-components'

import Img from '@/Img'
import { theme } from '@/utils'

export const Wrapper = styled.div`
  display: flex;
`
export const Item = styled.div``

export const Icon = styled(Img)`
  width: 15px;
  height: 15px;
  fill: ${theme('footer.text')};
  &:hover {
    fill: ${theme('footer.hover')};
    cursor: pointer;
  }
  display: block;
  margin-right: 8px;
`
