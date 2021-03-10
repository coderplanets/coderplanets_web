import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn()};
`
export const Divider = styled.div`
  width: 100%;
  border-top: 1px solid;
  border-color: ${theme('thread.articleDigest')};
  opacity: 0.5;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const Text = styled.div`
  ${css.flex('align-center')};
  font-size: 0.9rem;
`
export const Title = styled.div`
  color: ${theme('thread.articleDigest')};
`
export const JoinText = styled.a`
  flex-grow: 1;
  color: ${theme('thread.articleDigest')};
  &:hover {
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
    font-weight: bold;
  }
`
export const ViewsText = styled.div`
  color: ${theme('thread.articleDigest')};
  margin-right: 2%;
  font-size: 0.8rem;
`
export const SyncWrapper = styled.div`
  margin-top: 15px;
`
