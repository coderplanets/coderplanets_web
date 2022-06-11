import styled from 'styled-components'

import type { TMetric } from '@/spec'
// import { METRIC } from '@/constant'
// import { ASSETS_ENDPOINT } from '@/config'
import css, { theme } from '@/utils/css'

/**
 * see layout details:
 " @link https://css-tricks.com/the-fixed-background-attachment-hack/
 */
export const Skeleton = styled.div`
  height: 100vh;
  width: 100vw;
`

// background: #3b5456;
export const Wrapper = styled.div`
  ${css.flex('justify-center')};
`

type TInner = { metric: TMetric; sidebarPin: boolean }
/* min-width: ${({ minWidth }) => minWidth}; */
/*
  padding-left: ${({ noSidebar }) => (noSidebar ? '0' : '56px')};
  margin-left: ${({ sidebarPin }) => (sidebarPin ? '180px' : '0')};
 */
export const InnerWrapper = styled.div<TInner>`
  ${css.flexColumn()};
  ${({ metric }) => css.fitPageWidth(metric)};
  width: 100%;
  position: relative;
  height: 100%;
  min-height: 100vh;
  background: ${theme('bodyBg')};
  transition: all 0.2s;
  overflow-x: ${({ sidebarPin }) => (sidebarPin ? 'hidden' : '')};
  z-index: 1;
  ${css.media.tablet`
    position: relative;
    padding-left: 0;
  `};
`
type TBody = { isMobile: boolean }
export const BodyWrapper = styled.div<TBody>`
  ${css.flexColumn('align-both')};

  width: 100%;
`
// 180 is the sidebar full width
export const ContentWrapper = styled.div<{ offsetLeft: boolean }>`
  margin-left: ${({ offsetLeft }) => (offsetLeft ? '180px' : '0')};
  /* for global blur */
  transition: filter 0.25s;
`
export const ScrollHolder = styled.div`
  height: 100vh;
  width: 100%;
`
