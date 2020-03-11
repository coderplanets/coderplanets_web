import styled from 'styled-components'

import Img from '@Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  width: 100%;
  min-width: 110px;
`
export const ItemWrapper = styled.div`
  ${cs.flexColumn()};
  border-bottom: 1px solid;
  border-bottom-color: #094354;

  :last-child {
    border-bottom: none;
  }
`
export const Item = styled.div`
  ${cs.flex('justify-end')};
  fill: ${theme('thread.articleDigest')};
  align-items: center;
  color: ${({ active }) =>
    active ? theme('thread.articleTitle') : theme('thread.articleDigest')};
  font-size: ${({ active }) => (active ? '15px' : '14px')};
  padding: 8px 6px;
  padding-bottom: ${({ noFilter }) => (noFilter ? '10px' : '5px')};

  &:hover {
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
`
export const Icon = styled(Img)`
  display: ${({ active }) => (active ? 'block' : 'none')};
  width: 15px;
  height: 15px;

  ${Item}:hover & {
    display: block;
  }
`

export const ActiveDot = styled.div`
  background: ${theme('thread.articleTitle')};
  width: 5px;
  height: 5px;
  border-radius: 50%;
`
