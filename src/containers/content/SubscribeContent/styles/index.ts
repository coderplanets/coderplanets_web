import styled from 'styled-components'

import type { TTestable, TMetric } from '@/spec'
import Sticky from '@/widgets/Sticky'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn('align-center', 'justify-start')}
  width: 100%;
  min-height: 80vh;
  background-image: ${theme('banner.linearGradient')};
`
export const InnerWrapper = styled.div<{ metric: TMetric }>`
  ${css.flex('align-both', 'justify-between')};
  ${({ metric }) => css.fitContentWidth(metric)};
  width: 100%;
  color: ${theme('thread.articleDigest')};
`
// @ts-ignore
export const StickyWrapper = styled(Sticky)`
  ${css.flex('justify-center')}
`
