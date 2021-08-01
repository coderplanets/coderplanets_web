import styled from 'styled-components'

import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

type TSize = { size: string }
export const Wrapper = styled.div<TSize>`
  ${css.flex()};
  font-size: ${({ size }) => size};
  background: ${theme('dropdown.bg')};
  padding: 0 3px;
  border-radius: 5px;
  cursor: pointer;
`
// export const Title = styled.div``

export const IconWrapper = styled.span<TSize>`
  ${css.flex('align-center')};
  max-width: 0;
  ${Wrapper}:hover & {
    margin-left: 3px;
    max-width: calc(${({ size }) => size} + 3px);
  }
  transition: all 0.3s;
`

export const Icon = styled(Img)<TSize>`
  fill: ${theme('thread.articleTitle')};
  display: block;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  max-width: 0;

  ${Wrapper}:hover & {
    max-width: ${({ size }) => size};
    transition: all 0.5s;
  }
`
