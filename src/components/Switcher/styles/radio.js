import styled from 'styled-components'

import { cs, theme } from '@/utils'

// const width = '28px'
// const height = '25px'
export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  /* position: relative; */
  ${cs.flex('align-center')};
`

const getActiveBackground = (dimOnActive) => {
  return dimOnActive ? '#1f5271' : theme('button.primary')
}

export const Label = styled.label`
  position: relative;
  margin-right: ${({ checked }) => (checked ? '12px' : '5px')};
  padding-left: ${({ checked }) => (checked ? '14px' : '24px')};
  padding-right: 14px;
  line-height: 1.8;
  cursor: pointer;
  background: ${({ checked, dimOnActive }) =>
    checked ? getActiveBackground(dimOnActive) : 'transparent'};
  color: ${({ checked }) =>
    checked ? theme('button.fg') : theme('thread.articleTitle')};
  border-radius: 20px;

  &:before {
    display: ${({ checked }) => (checked ? 'none' : 'block')};
    box-sizing: border-box;
    content: ' ';
    position: absolute;
    top: 3px;
    left: 0;
    width: 17px;
    height: 17px;
    border: 2px solid;
    border-color: ${({ checked }) =>
      checked ? theme('button.fg') : theme('thread.articleTitle')};
    border-radius: 50%;
  }

  transition: 0.25s all ease;
`
