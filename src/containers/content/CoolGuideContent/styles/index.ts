import styled from 'styled-components'

import type { TTestable, TMetric } from '@/spec'
import css from '@/utils/css'

import { SIDEBAR_WIDTH } from './metric'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn('align-both')}
  width: 100%;
  margin-top: 12px;
`
export const InnerWrapper = styled.div<{ metric: TMetric }>`
  ${css.flex('justify-center')};
  margin-top: 30px;
  width: 100%;

  ${({ metric }) => css.fitContentWidth(metric)};

  ${css.media.mobile`
    padding: 0 60px;
    width: 100%;
  `};
`
export const ContentWrapper = styled.div`
  ${css.flexColumnGrow()};
  max-width: ${() => `calc(100% - ${SIDEBAR_WIDTH})`};

  ${css.media.mobile`
    max-width: 100%;
  `};
`
