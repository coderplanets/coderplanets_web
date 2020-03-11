import styled from 'styled-components'

import Img from '@Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  width: 140px;
  margin-right: 25px;
`

const activeColor = '#009C9E'
export const Item = styled.div`
  ${cs.flex('justify-end')};
  fill: ${theme('thread.articleDigest')};
  align-items: center;
  color: ${({ active }) =>
    active ? activeColor : theme('thread.articleDigest')};
  font-size: 14px;
  border-bottom: 1px solid;
  border-bottom-color: #094354;
  padding: 8px 6px;

  &:hover {
    color: ${({ active }) =>
      active ? activeColor : theme('thread.articleTitle')};
    cursor: pointer;
  }

  :last-child {
    border-bottom: none;
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
