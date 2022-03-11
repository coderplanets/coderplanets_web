import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn('align-end')};
  margin-top: 2px;
`
export const Hint = styled.div`
  font-size: 11px;
  color: ${theme('thread.articleDigest')};
  margin-top: 4px;
  opacity: 0.6;
`
export const Name = styled.div`
  font-size: 14px;
  margin-top: 3px;
  margin-bottom: 5px;
  color: ${theme('thread.articleTitle')};
  ${css.cutRest('100px')};
`
export const Intro = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
  line-height: 1.8;
  text-align: right;
  position: relative;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  max-width: 200px;
`
