import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css, { theme } from '@/utils/css'

import { LineDivider as LineDividerBase } from '@/widgets/Common'

type TInnerWrapper = {
  testid: string
}

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TInnerWrapper>`
  ${css.flex('align-center')};
`
export const UpvoteBtnWrapper = styled.div`
  margin-top: 6px;
`
export const DescWrapper = styled.div`
  ${css.flex('align-center')};
  margin-left: 2px;
`
export const Text = styled.div`
  color: ${theme('thread.extraInfo')};
  font-size: 14px;
`
export const Count = styled.div<{ noOne: boolean }>`
  color: ${theme('thread.extraInfo')};
  font-weight: ${({ noOne }) => (noOne ? 400 : 600)};
  font-size: 16px;
  margin-left: 3px;
  margin-top: 1px;
`
export const LineDivider = styled(LineDividerBase)`
  height: 11px;
  margin-top: 1px;
  background: ${theme('thread.extraInfo')};
`
