import styled from 'styled-components'

import Img from '@Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  background: #05303e;
  padding-top: 10px;
  padding-bottom: 10px;
`
export const Item = styled.div`
  ${cs.flex('justify-end')};
  fill: ${theme('thread.articleDigest')};
  align-items: center;
  color: ${({ active }) =>
    active ? theme('thread.articleTitle') : theme('thread.articleDigest')};
  font-size: 14px;
  padding: 8px 6px;

  &:hover {
    color: ${theme('thread.articleTitle')};
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
