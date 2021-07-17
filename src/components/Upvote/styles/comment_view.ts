import styled from 'styled-components'

import type { TTestable } from '@/spec'
import { css } from '@/utils'

type TInnerWrapper = {
  testid: string
}

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TInnerWrapper>`
  ${css.flexColumn('align-both')};
  margin-left: -9px;
`
export const UpWrapper = styled.div`
  margin-left: 7px;
`
export const CountWrapper = styled.div`
  margin-top: -4px;
`
