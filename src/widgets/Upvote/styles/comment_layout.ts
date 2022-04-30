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
  margin-left: 6px;
`
export const CountWrapper = styled.div`
  margin-top: -4px;
  margin-left: 1px;
`
