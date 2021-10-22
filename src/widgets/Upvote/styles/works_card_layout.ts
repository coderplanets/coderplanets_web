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
`
export const UpWrapper = styled.div`
  margin-top: 2px;
  /* transform: scale(0.9); */
`
export const CountWrapper = styled.div`
  margin-top: -4px;
  margin-left: -5px;
`
