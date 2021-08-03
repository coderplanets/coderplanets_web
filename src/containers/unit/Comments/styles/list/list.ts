import styled from 'styled-components'
import { theme } from '@/utils/themes'

// min-height: 300px;
export const Wrapper = styled.div`
  position: relative;
  /* border: 1px solid tomato; */
`
export const IndentLine = styled.div<{ hasReplies: boolean }>`
  position: absolute;
  top: 78px;
  left: 2px;
  height: calc(100% - 78px);
  width: 25px;
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
  margin-left: 24px;
  padding-left: 4px;
`
