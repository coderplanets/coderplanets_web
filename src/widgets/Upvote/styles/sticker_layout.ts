import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css from '@/utils/css'

type TInnerWrapper = {
  testid: string
}

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TInnerWrapper>`
  ${css.flexColumn('align-both')};
  margin-left: -5px;
  margin-top: 5px;
`
export const UpWrapper = styled.div`
  margin-left: 5px;
`
export const CountWrapper = styled.div`
  margin-top: -4px;
  margin-left: 1px;
`
export const AvatarsWrapper = styled.div<{ count: number }>`
  display: ${({ count }) => (count === 0 ? 'none' : 'block')};
  margin-left: ${({ count }) => (count === 1 ? '3px' : 0)};
  margin-top: 4px;
`
