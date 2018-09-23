import styled from 'styled-components'

import Img from '../../../components/Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  padding-left: 15px;
  padding-bottom: 0;
`
export const Item = styled.div`
  color: ${theme('banner.desc')};
  margin-bottom: 8px;
  display: flex;
  align-items: flex-start;

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
  ${Item}:hover & {
    fill: ${({ red }) => (red ? 'tomato' : theme('banner.title'))};
  }
`
export const ItemTitle = styled.div`
  font-size: 0.9rem;
`
