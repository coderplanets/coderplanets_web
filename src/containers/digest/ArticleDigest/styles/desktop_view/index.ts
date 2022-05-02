import styled from 'styled-components'

import type { TTestable, TMetric } from '@/spec'
import css, { theme, WIDTH } from '@/utils/css'

import { getDigestHeight } from './metric'

type TWrapper = { metric: TMetric } & TTestable
export const Wrapper = styled.nav.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TWrapper>`
  ${css.flexColumn('justify-center')};
  position: relative;
  background: transparent;
  border-bottom: ${theme('banner.spliter')};
  min-height: ${({ metric }) => getDigestHeight(metric)};
  height: auto;

  margin-bottom: 24px;
  width: 100%;
  max-width: ${WIDTH.ARTICLE.PAGE};
`
export const InnerWrapper = styled.div`
  ${css.flex('justify-center')};
  width: 100%;
`
export const BannerContent = styled.div`
  ${css.flex()};
  width: 100%;
`
