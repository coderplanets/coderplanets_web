import styled from 'styled-components'

import { TActive } from '@/types'
import Img from '@/Img'
import { theme, css } from '@/utils'

export const OptionWrapper = styled.div`
  ${css.flexColumn()};
  padding: 10px;
`
export const OptionItem = styled.div`
  ${css.flex()};
  margin-bottom: 4px;
  font-size: 0.9rem;
  color: ${theme('banner.desc')};
  font-weight: bold;
  &:hover {
    color: ${theme('banner.title')};
    cursor: pointer;
  }
`
export const OptionCheckIcon = styled(Img)<TActive>`
  fill: ${theme('banner.title')};
  opacity: ${({ active }) => (active ? '1' : '0')};
  ${css.size(12)};
  margin-right: 3px;
`
export const OptionText = styled.div``
