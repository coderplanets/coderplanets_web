import styled from 'styled-components'
import { theme } from '@/utils/themes'

// min-height: 300px;
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
  margin-left: 6px;

  &:hover {
    cursor: pointer;
    border-left: 1px solid;
    border-left-color: ${theme('comment.indentActive')};
  }

  transition: all 0.25s;
`
export const RepliesWrapper = styled.div`
  /* border-left: 1px solid;
  border-left-color: #004251; */
  margin-left: 8px;
`
export const RepliesCommentsWrapper = styled.div`
  margin-left: 17.5px;
  padding-left: 4px;
`
