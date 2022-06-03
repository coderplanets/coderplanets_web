import styled from 'styled-components'
import TimeAgo from 'timeago-react'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div<{ hasComments: boolean }>`
  ${css.flex('align-center')};
  display: ${({ hasComments }) => (hasComments ? 'flex' : 'none')};
  position: absolute;
  top: -4px;
  right: 0;
  color: ${theme('thread.extraInfo')};
  margin-right: 1px;
  margin-top: 8px;
`
export const Hint = styled.div`
  ${css.flexColumn('align-start')};
  width: 180px;
  padding-left: 5px;
  font-size: 13px;
`
// @ts-ignore
export const TimeStamp = styled(TimeAgo)`
  font-size: 11px;
`
export const TimeStr = styled.div`
  color: ${theme('thread.articleTitle')};
`
