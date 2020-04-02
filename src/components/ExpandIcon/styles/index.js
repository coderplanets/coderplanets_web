import styled from 'styled-components'

import Img from '@Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div.attrs(props => ({
  'data-testid': props.testid,
}))`
  ${cs.flex('align-center')};
  /* margin-left: 12px; */
  cursor: pointer;
  background: ${({ active }) => (active ? '#0f3f4e' : 'transparent')};
  padding: ${({ active }) => (active ? '0 5px' : '0')};
  border-radius: ${({ active }) => (active ? '5px' : '0')};

  &:hover {
    background: #044050;
    padding: 0 5px;
    border-radius: 5px;
  }

  transition: all 0.25s;
`
export const Icon = styled(Img)`
  fill: ${({ active }) =>
    active ? theme('thread.articleTitle') : theme('thread.articleDigest')};
  display: block;
  padding: 0;
  margin-right: 4px;
  /* width: 11px;
  height: 11px; */
  width: ${({ active }) => (active ? '15px' : '18px')};
  height: ${({ active }) => (active ? '15px' : '18px')};

  ${Wrapper}:hover & {
    fill: ${theme('thread.articleTitle')};
    width: 15px;
    height: 15px;
  }
  transition: all 0.25s;
`
export const Text = styled.div`
  color: ${({ active }) =>
    active ? theme('thread.articleTitle') : theme('thread.articleDigest')};
  /* font-size: 11px; */
  font-size: 14px;
  opacity: ${({ active }) => (active ? 1 : 0)};
  outline: none;

  ${Wrapper}:hover & {
    color: ${theme('thread.articleTitle')};
    opacity: 1;
  }

  transition: all 0.25s;
`
