import styled from 'styled-components'

import type { TTestable, TSpace } from '@/spec'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

type TWrapper = {
  noBg: boolean
} & TTestable &
  TSpace

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TWrapper>`
  ${css.flex('align-start')};
  color: ${({ noBg }) =>
    noBg ? theme('thread.articleDigest') : theme('thread.articleTitle')};
  padding-left: ${({ noBg }) => (noBg ? '5px' : '12px')};
  padding-right: 15px;
  padding-top: 8px;
  padding-bottom: 7px;
  /* width: 100%; */
  min-height: 36px;
  background: ${({ noBg }) => (noBg ? 'transparent' : '#FDF6E8')};
  border-radius: 8px;

  margin-top: ${({ top }) => `${top}px` || 0};
  margin-bottom: ${({ bottom }) => `${bottom}px` || 0};
  margin-left: ${({ left }) => `${left}px` || 0};
  margin-right: ${({ right }) => `${right}px` || 0};
`
export const Main = styled.div`
  flex-grow: 1;
  font-size: 13px;
  margin-top: 1px;
  line-height: 1.85;
  width: calc(100% - 18px);
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
