import styled from 'styled-components'

import type { TTestable } from '@/spec'
import { css } from '@/utils'
import { SIDEBAR_WIDTH } from './metric'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn('align-both')}
  width: 100%;
`
export const InnerWrapper = styled.div<{ metric: string }>`
  ${css.flex('justify-center')};
  margin-top: 30px;
  width: 100%;

  ${({ metric }) => css.fitContentWidth(metric)};
`
export const ContentWrapper = styled.div`
  ${css.flexColumnGrow()};
  max-width: ${() => `calc(100% - ${SIDEBAR_WIDTH})`};
`
