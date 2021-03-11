import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn('align-start')};
  padding: 10px 15px;
  padding-top: ${({ first }) => (first ? '40px' : '10px')};
  padding-left: 0;
  color: ${theme('thread.articleDigest')};
  width: 100px;
`
export const DateInfo = styled.div`
  ${css.flex('align-end')};
  font-size: 12px;
`
export const DayNum = styled.div`
  font-size: 15px;
  color: ${theme('thread.articleTitle')};
`
export const Divider = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 10px;
  margin-left: 5px;
  margin-right: 4px;
  margin-bottom: 2px;
`
export const MonthNum = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
`
export const Desc = styled.div`
  font-size: 12px;
  margin-top: 2px;
`
