import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css, { theme } from '@/utils/css'

type TInnerWrapper = {
  testid: string
}

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TInnerWrapper>`
  ${css.flex('align-center')};
`
export const UpvoteBtnWrapper = styled.div`
  transform: scale(0.8);
  margin-top: 4px;
`
export const DescWrapper = styled.div`
  ${css.flex('align-center')};
  margin-left: 2px;
`
export const Text = styled.div`
  color: ${theme('thread.extraInfo')};
  font-size: 12px;
  margin-top: 1px;
`
export const Count = styled.div<{ noOne: boolean }>`
  color: ${({ noOne }) =>
    noOne ? theme('thread.articleDigest') : theme('thread.extraInfo')};
  font-weight: ${({ noOne }) => (noOne ? 400 : 600)};
  font-size: 14px;
  margin-left: -3px;
  margin-right: 10px;
  margin-top: -1px;
`
export const LineDivider = styled.div`
  height: 10px;
  width: 1px;
  background: ${theme('thread.articleDigest')};
  background: ${theme('thread.extraInfo')};
  opacity: 0.9;
  margin-right: 8px;
`