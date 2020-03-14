import styled from 'styled-components'

// import Img from '@Img'
import { cs, theme } from '@utils'

const activeColor = '#009C9E'
export const Wrapper = styled.div`
  ${cs.flexColumn('align-end')};
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  padding: 4px 6px;
  padding-top: 0;
`
export const RadioWrapper = styled.div`
  ${cs.flexColumn('align-end')};
  margin-top: 5px;
`
export const RadioItem = styled.div`
  ${cs.flex('align-center')};
  margin-bottom: 8px;
  letter-spacing: 2px;
  &:hover {
    cursor: pointer;
  }
`
export const ActiveDot = styled.div`
  background: #27908f;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-right: 16px;
  opacity: 0;

  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: opacity 0.25s;
`
export const RadioTitle = styled.div`
  font-size: 14px;
  color: ${({ active }) =>
    active ? activeColor : theme('thread.articleDigest')};
  transition: opacity 0.25s;
`
export const Item = styled.div`
  ${cs.flex('align-center', 'justify-end')};
  width: 100%;
`
