import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('justify-between')};
  padding: 0 10px;
  margin-top: 15px;
`
export const ReactionNum = styled.div`
  ${css.flexColumn('justify-center')};
  text-align: center;
`
export const NumDesc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 0.8rem;
`

export const ReadOnlyNumber = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 1rem;
  cursor: help;
`

export const Number = styled(ReadOnlyNumber)`
  color: ${theme('thread.articleTitle')};
  font-size: 1rem;

  &:hover {
    color: ${theme('banner.active')};
    cursor: pointer;
  }
`
