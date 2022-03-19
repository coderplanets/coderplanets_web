import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div<{ showSearchNote: boolean }>`
  margin-top: ${({ showSearchNote }) => (showSearchNote ? 0 : '-200px')};
  margin-left: ${({ showSearchNote }) => (showSearchNote ? '75px' : '105px')};
`
export const EmptyCard = styled.div`
  ${css.flexColumn('align-center')};
  position: relative;
  width: 500px;
  height: 200px;
`
export const EmptyTitle = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 16px;
`
export const EmptyDesc = styled.div`
  margin-top: 10px;
  color: ${theme('thread.articleDigest')};
  font-size: 15px;
`

export const IssueLink = styled.a`
  color: ${theme('button.primary')};
  margin-left: 3px;
  margin-right: 3px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: ${theme('button.primary')};
    text-decoration: underline;
  }
  transition: color 0.2s;
`
