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
  margin-left: -11px;
  margin-top: 1px;
`
export const UpWrapper = styled.div`
  margin-left: 8px;
  transform: scale(0.9);
`
export const CountWrapper = styled.div`
  min-width: 18px;
  text-align: center;
  font-weight: bold;

  margin-top: -4px;
  margin-left: 3px;
`
