import styled from 'styled-components'

import type { TTestable, TSpace } from '@/spec'
// import Img from '@/Img'
import css from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable & TSpace>`
  ${css.flexColumn('align-center', 'justify-between')};
  width: 70px;
  height: 70px;
  border-radius: 5px;
  padding: 12px;

  background: #003b49;

  margin-top: ${({ top }) => `${top}px`};
  margin-bottom: ${({ bottom }) => `${bottom}px`};
  margin-left: ${({ left }) => `${left}px`};
  margin-right: ${({ right }) => `${right}px`};
`
export const Row = styled.div`
  ${css.flex('align-center', 'justify-between')};
  width: 100%;
`
export const Dice = styled.div`
  ${css.circle(12)};
  background: #2f5257;
`
