import styled from 'styled-components'

// import Img from '@Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  margin-top: 22px;
`
export const Divider = styled.div`
  height: 1px;
  background: #004352;
  width: calc(100% - 25px);
  margin-top: 15px;
  margin-bottom: 15px;
`
export const TopFilter = styled.div`
  color: ${theme('thread.articleDigest')};
  width: calc(100% - 25px);
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 14px;
  font-weight: bold;
  padding: 6px;
  margin-bottom: 10px;
`
export const Option = styled.div`
  ${cs.flex('align-center')};
  font-size: 14px;
  padding: 6px;
  background: ${({ active }) => (active ? '#08323e' : 'transparent')};
  border-radius: 6px;
  color: ${({ active }) =>
    active ? theme('thread.articleTitle') : theme('thread.articleDigest')};

  &:hover {
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }

  transition: all 0.25s;
`
