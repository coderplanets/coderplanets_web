import styled from 'styled-components'

import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  border-right: 1px solid #003847;
  border-left: 1px solid #003847;
  background: #042833;
  padding-top: 5px;
  padding-bottom: 6px;
`
export const Item = styled.div`
  ${cs.flex('justify-end')};
  fill: ${theme('thread.articleDigest')};
  align-items: center;
  color: ${({ active }) =>
    active ? theme('thread.articleTitle') : theme('thread.articleDigest')};
  font-size: 13px;
  padding: 8px 6px;
  padding-left: 10px;

  &:hover {
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }

  :last-child {
    border-bottom: none;
  }
`
export const ActiveDot = styled.div`
  background: ${theme('thread.articleTitle')};
  width: 5px;
  height: 5px;
  border-radius: 50%;
`
