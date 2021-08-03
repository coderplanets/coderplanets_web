import styled from 'styled-components'

import type { TTestable } from '@/spec'

import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  padding-left: 12px;
  padding-right: 15px;
  width: 100%;
  height: 40px;
  background: #00333f;
  border-radius: 8px;
`
export const Main = styled.div`
  flex-grow: 1;
  font-size: 14px;
`
export const UserName = styled.span`
  color: ${theme('thread.articleTitle')};
  margin-right: 5px;
`
export const AuthorTag = styled.span`
  color: ${theme('thread.articleDigest')};
  margin-left: 2px;
  margin-right: 5px;
`
export const Timestamp = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
`
export const Why = styled(Img)`
  ${css.size(15)};
  fill: ${theme('thread.articleDigest')};
  margin-left: 10px;
  margin-top: -1px;

  &:hover {
    fill: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
`
