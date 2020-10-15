import styled from 'styled-components'

import { theme, css } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  padding: 5px;
  padding-left: 10px;
  padding-bottom: 0;
`
export const Option = styled.div`
  ${css.flex('align-center')};
  color: ${theme('banner.desc')};
  margin-bottom: 8px;

  &:hover {
    color: ${({ red }) => (red ? 'tomato' : theme('banner.title'))};

    cursor: pointer;
  }
`
export const OptionIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  width: 18px;
  height: 18px;
  margin-right: 6px;
  display: block;
  transform: ${({ reverse }) => (reverse ? 'rotate(180deg)' : '')};
  ${Option}:hover & {
    fill: ${({ red }) => (red ? 'tomato' : theme('banner.title'))};
  }
`
export const OptionTitle = styled.div`
  font-size: 0.9rem;
`
