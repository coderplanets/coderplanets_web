import styled from 'styled-components'

import Img from '@/Img'
import { cs, theme } from '@/utils'

export const Wrapper = styled.div`
  background: #05303e;
  padding-top: 10px;
  border-bottom: 1px solid;
  border-color: #00303d;
`
const activeColor = '#009C9E'
export const Item = styled.div`
  ${cs.flex('justify-end')};
  fill: ${theme('thread.articleDigest')};
  align-items: center;
  color: ${({ active }) =>
    active ? activeColor : theme('thread.articleDigest')};
  font-size: 14px;
  padding: 8px 10px;
  padding-right: 6px;

  &:hover {
    color: ${({ active }) =>
      active ? activeColor : theme('thread.articleDigest')};
    cursor: pointer;
  }

  :last-child {
    border-bottom: none;
  }
  transition: all 0.25s;
`
export const Icon = styled(Img)`
  display: ${({ active }) => (active ? 'block' : 'none')};
  fill: ${({ active }) =>
    active ? activeColor : theme('thread.articleDigest')};
  width: 15px;
  height: 15px;

  ${Item}:hover & {
    display: block;
  }
`
