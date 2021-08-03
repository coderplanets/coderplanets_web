import styled from 'styled-components'

import type { TTestable, TMetric, TActive } from '@/spec'
import { theme } from '@/utils/themes'
import css from '@/utils/css'
import Img from '@/Img'

import { getFixStickerOffset } from './metric'

type TWrapper = TTestable & TActive
export const Wrapper = styled.nav.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TWrapper>`
  ${css.flex('justify-center')};
  top: ${({ show }) => (show ? 0 : '-48px;')};
  opacity: ${({ show }) => (show ? 1 : 0)};

  z-index: ${({ show }) => (show ? css.zIndex.articleFixedHeader : -1)};

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  transition-property: top, opacity;
  transition-duration: 0.25s;
  transition-timing-function: ease-out;
`
export const InnerWrapper = styled.div<{ metric: TMetric }>`
  ${css.flex('align-center')};
  background: #002a34; // ${theme('header.bg')};
  width: 100%;
  height: 48px;
  ${({ metric }) => css.fitPageWidth(metric)};
  border-bottom: 1px solid;
  border-bottom-color: ${theme('drawer.divider')};
`
export const ContentWrapper = styled.div<{ metric: TMetric }>`
  ${css.flex('align-center')};
  width: 100%;
  height: 100%;
  ${({ metric }) => css.fitContentWidth(metric)};
`
export const StickerWrapper = styled.div<{ metric: TMetric }>`
  ${({ metric }) => css.fitStickerWidth(metric)};
  ${css.flex('justify-end')};
  margin-left: ${({ metric }) => getFixStickerOffset(metric)};
`
export const Cover = styled(Img)`
  ${css.size(28)};
  margin-right: 15px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-weight: bold;
  font-size: 17px;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  ${css.cutRest('300px')};
`
