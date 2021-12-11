import styled from 'styled-components'

import type { TTestable, TSpace } from '@/spec'
// import Img from '@/Img'
import css from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable & TSpace>`
  ${css.size(70)};
  ${css.flexColumn('align-center', 'justify-between')};
  border-radius: 5px;
  padding: 12px;

  ${css.media.mobile`
    ${css.size(42)};
    display: flex;
  `};

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

  ${css.media.mobile`
    ${css.circle(6)};
  `};
`
