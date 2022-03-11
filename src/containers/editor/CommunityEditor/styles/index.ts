import styled from 'styled-components'

import type { TMetric } from '@/spec'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div<{ metric: TMetric }>`
  ${css.flexColumn('align-both')};
  width: 100%;
  ${({ metric }) => css.fitPageWidth(metric)};
`
export const InnerWrapper = styled.div<{ metric: TMetric }>`
  ${css.flexColumn('justify-center')};
  width: 100%;
  ${({ metric }) => css.fitContentWidth(metric)};
`
export const ContentWrapper = styled.div`
  color: ${theme('thread.articleDigest')};
  transition: all 0.2s;
`
