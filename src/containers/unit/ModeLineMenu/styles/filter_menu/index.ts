import styled from 'styled-components'

// import Img from '@/Img'
import type { TTestable } from '@/spec'
import css from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn('align-start')};
  margin-top: 25px;
  width: 100%;
  min-height: 200px;
  padding: 0;
`
export const holder = styled.div``
