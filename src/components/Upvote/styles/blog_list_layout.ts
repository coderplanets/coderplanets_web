import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css from '@/utils/css'

type TInnerWrapper = {
  testid: string
}

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TInnerWrapper>`
  ${css.flexColumn('align-center', 'justify-start')};
  margin-left: -3px;
  margin-right: 6px;
  margin-top: 4px;
`
export const UpWrapper = styled.div`
  margin-left: 7px;
  transform: scale(0.9);
`
export const CountWrapper = styled.div`
  margin-top: -3px;
  margin-left: 3px;
`
