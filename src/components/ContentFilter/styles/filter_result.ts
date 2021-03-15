import styled from 'styled-components'

import type { TActive } from '@/spec'
import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
`
export const ResultText = styled.div`
  color: ${theme('thread.filterResultHint')};
  margin-right: 3px;
`
export const ResultDivider = styled.div`
  width: 1px;
  height: 12px;
  margin: 0 10px;
  background-color: ${theme('thread.filterResultHint')};
`
export const MoreOptionWrapper = styled.div`
  ${css.flex('align-center')};
`
export const FaqText = styled.div<TActive>`
  background-color: #104456;
  border-radius: 3px;
  padding: 0 6px;
  font-size: 12px;
  color: ${({ active }) => (active ? theme('thread.extraInfo') : '#1b8aaf')};

  &:hover {
    color: ${theme('thread.extraInfo')};
    cursor: pointer;
  }

  transition: color 0.25s;
`
export const MoreDivider = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${theme('thread.filterResultHint')};
  margin-left: 8px;
  margin-right: 8px;
`
