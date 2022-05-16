import styled from 'styled-components'

import type { TTestable, TMetric, TActive, TThread } from '@/spec'
import css, { theme, zIndex } from '@/utils/css'
import Img from '@/Img'

import { getFixStickerOffset, getFixStickerAlign } from './metric'

type TWrapper = TTestable & TActive
export const Wrapper = styled.nav.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TWrapper>`
  ${css.flex('justify-center')};
  top: ${({ show }) => (show ? 0 : '-48px;')};
  opacity: ${({ show }) => (show ? 1 : 0)};
  z-index: ${({ show }) => (show ? zIndex.articleFixedHeader : -1)};

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
  background: #fff; // to-theme
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
type TStickerWrapper = { metric: TMetric; thread: TThread }
export const RightWrapper = styled.div<TStickerWrapper>`
  ${({ metric }) => css.fitStickerWidth(metric)};
  ${({ thread }) => css.flex(getFixStickerAlign(thread))};

  margin-left: ${({ metric }) => getFixStickerOffset(metric)};
`
export const Cover = styled(Img)`
  ${css.size(28)};
  margin-right: 15px;
`
export const Title = styled.div`
  ${css.cutRest('400px')};
  color: ${theme('thread.articleTitle')};
  font-weight: 500;
  font-size: 17px;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  ${css.cutRest('300px')};
`
export const ArticleStateBadgeWrapper = styled.div`
  margin-left: 10px;
`
