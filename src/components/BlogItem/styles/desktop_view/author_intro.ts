import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn('align-end')};
  margin-top: 2px;
`
export const Hint = styled.div`
  font-size: 11px;
  color: ${theme('thread.articleDigest')};
  opacity: 0.6;
`
export const Name = styled.div`
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 8px;
  color: ${theme('thread.articleTitle')};
`
export const Intro = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
  text-align: right;
  position: relative;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
`
