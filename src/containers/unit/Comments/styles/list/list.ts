import styled from 'styled-components'

import { theme } from '@/utils/css'
// import css from '@/utils/css'

export const Wrapper = styled.div`
  position: relative;
  /* border: 1px solid tomato; */
`
type TIndentLine = {
  isFold: boolean
  hasReplies: boolean
}

export const IndentLine = styled.div<TIndentLine>`
  position: absolute;
  top: ${({ isFold }) => (isFold ? '62px' : '78px')};
  left: 2px;
  height: ${({ isFold }) =>
    isFold ? 'calc(100% - 62px)' : 'calc(100% - 78px)'};
  width: 20px;
  border-left: 1px dashed;
  border-left-color: ${theme('comment.indentLine')};
  margin-left: 5px;

  &:hover {
    cursor: pointer;
    border-left: 1px solid;
    border-left-color: ${theme('comment.indentActive')};
  }

  transition: all 0.2s;
`
