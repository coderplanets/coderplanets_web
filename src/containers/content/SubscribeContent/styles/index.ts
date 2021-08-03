import styled from 'styled-components'

import type { TTestable } from '@/spec'
import Sticky from '@/components/Sticky'

import { theme } from '@/utils/themes'
import css from '@/utils/css'
import { WIDTH } from '@/utils/css/metric'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn('align-start')};
  width: 100%;
  /* 130 means height of (header + footer) */
  min-height: calc(100vh - 130px);
  margin-bottom: 50px;
  background-image: ${theme('banner.linearGradient')};
`
export const InnerWrapper = styled.div`
  ${css.flex('align-start')}
  max-width: ${WIDTH.COMMUNITY.PAGE};
  width: 100%;
  color: ${theme('thread.articleDigest')};
`
export const StickyWrapper = styled(Sticky)`
  ${css.flex('justify-center')}
  width: 40%;
`
