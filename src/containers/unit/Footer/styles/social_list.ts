import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex()};
`
export const Item = styled.div``

export const Icon = styled(Img)`
  ${css.size(15)};
  fill: ${theme('footer.text')};
  margin-right: 8px;

  &:hover {
    fill: ${theme('footer.hover')};
    cursor: pointer;
  }
`
