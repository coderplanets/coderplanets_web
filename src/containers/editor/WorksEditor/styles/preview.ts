import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css from '@/utils/css'

import { CONTENT_WIDTH, CONTENT_NARROW_WIDTH } from './metric'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable & { narrow: boolean }>`
  ${css.flexColumn('justify-center')};
  width: ${({ narrow }) =>
    narrow ? `${CONTENT_NARROW_WIDTH}px` : `${CONTENT_WIDTH}px`};

  margin-top: ${({ narrow }) => (narrow ? '100px' : '30px')};

  transition: width 0.2s;
`
export const InnerWrapper = styled.div``
