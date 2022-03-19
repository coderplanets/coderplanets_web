import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  padding: 5px;
  padding-left: 10px;
  padding-bottom: 0;
`
export const Option = styled.div<{ red: boolean }>`
  ${css.flex('align-center')};
  color: ${theme('banner.desc')};
  margin-bottom: 8px;

  &:hover {
    color: ${({ red }) => (red ? 'tomato' : theme('banner.title'))};

    cursor: pointer;
  }
`
type TOptionIcon = {
  red: boolean
  reverse: boolean
}
export const OptionIcon = styled(Img)<TOptionIcon>`
  fill: ${theme('banner.desc')};
  ${css.size(18)};
  margin-right: 6px;
  transform: ${({ reverse }) => (reverse ? 'rotate(180deg)' : '')};
  ${Option}:hover & {
    fill: ${({ red }) => (red ? 'tomato' : theme('banner.title'))};
  }
`
export const OptionTitle = styled.div`
  font-size: 0.9rem;
`
