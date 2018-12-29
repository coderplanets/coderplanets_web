import styled from 'styled-components'

import Img from '../../../components/Img'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
  padding: 10px;
  padding-left: 15px;
  padding-bottom: 0;
`
export const Item = styled.div`
  ${cs.flex('align-center')};
  color: ${theme('banner.desc')};
  margin-bottom: 8px;

  &:hover {
    color: ${({ red }) => (red ? 'tomato' : theme('banner.title'))};

    cursor: pointer;
  }
`
export const ItemIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  width: 18px;
  height: 18px;
  margin-right: 6px;
  display: block;
  transform: ${({ reverse }) => (reverse ? 'rotate(180deg)' : '')};
  ${Item}:hover & {
    fill: ${({ red }) => (red ? 'tomato' : theme('banner.title'))};
  }
`
export const ItemTitle = styled.div`
  font-size: 0.9rem;
`
