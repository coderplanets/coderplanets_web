import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css from '@/utils/css'

import { SIDEBAR_WIDTH } from './metric'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn('align-both')}
  width: 100%;
`
export const InnerWrapper = styled.div<{ metric }>`
  ${css.flex()};
  margin-top: 12px;
  min-height: 100vh;
  ${({ metric }) => css.fitContentWidth(metric)};
`
export const ContentWrapper = styled.div`
  ${css.flexColumnGrow()};
  max-width: ${() => `calc(100% - ${SIDEBAR_WIDTH})`};
`
