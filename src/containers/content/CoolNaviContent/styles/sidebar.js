import styled from 'styled-components'

// import Img from '@components/Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  width: 130px;
  margin-right: 22px;
`
export const Item = styled.div`
  ${cs.flex('justify-end')};
  align-items: center;
  color: ${({ active }) =>
    active ? theme('thread.articleTitle') : theme('thread.articleDigest')};
  font-size: ${({ active }) => (active ? '15px' : '14px')};
  border-bottom: 1px solid;
  border-bottom-color: #094354;
  padding: 8px 6px;

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
