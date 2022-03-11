import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  width: 120px;
  min-width: 120px;
  margin-right: 70px;
  margin-left: 12px;
`
export const Holder = styled.div`
  flex-grow: 1;
`
export const SearchHint = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
`
export const SearchTitle = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 13px;
  margin-bottom: 5px;
`
