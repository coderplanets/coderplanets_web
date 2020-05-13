import styled from 'styled-components'

import { cs, theme } from '@/utils'

const activeColor = '#009C9E'

export const Wrapper = styled.div`
  background: #042833;
  padding-top: ${({ active }) => (active ? '5px' : '0')};
  padding-bottom: ${({ active }) => (active ? '6px' : '0')};
  max-height: ${({ active }) => (active ? '500px' : '0')};
  overflow: hidden;
  transition: ${({ active }) => (active ? 'max-height 1s ease' : 'none')};
`
export const Item = styled.div`
  ${cs.flex('justify-end')};
  fill: ${theme('thread.articleDigest')};
  align-items: center;
  color: ${({ active }) =>
    active ? activeColor : theme('thread.articleDigest')};
  font-size: 14px;
  padding: 8px 10px;
  padding-right: 11px;

  &:hover {
    color: ${({ active }) =>
      active ? activeColor : theme('thread.articleTitle')};
    cursor: pointer;
  }

  :last-child {
    border-bottom: none;
  }
  transition: all 0.25s;
`
export const ActiveDot = styled.div`
  background: ${({ active }) =>
    active ? activeColor : theme('thread.articleTitle')};
  width: 5px;
  height: 5px;
  border-radius: 50%;
`
