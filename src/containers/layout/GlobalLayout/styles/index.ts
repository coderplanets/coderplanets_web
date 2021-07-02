import styled from 'styled-components'

import { C11N } from '@/constant'
import { ASSETS_ENDPOINT } from '@/config'
import { theme, css } from '@/utils'

// background: #3b5456;
export const Wrapper = styled.div`
  ${css.flex('justify-center')};
  background-color: ${theme('spaceBg')};

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background-image: url(${ASSETS_ENDPOINT}/space-background.svg);
    background-attachment: fixed;
    width: 100%;
    height: 100%;
    opacity: 0.6;
  }
`

type TInner = { metric: string; sidebarPin: boolean }
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
  ${css.media.tablet`
    position: relative;
    padding-left: 0;
  `};
`
type TBody = { layout: string; isMobile: boolean }
export const BodyWrapper = styled.div<TBody>`
  ${css.flex('align-both')};
  flex-direction: ${({ layout, isMobile }) => {
    if (isMobile) return 'column'
    return layout === C11N.CLASSIC ? 'column' : 'row-reverse'
  }};
  align-items: ${({ layout }) => {
    return layout === C11N.CLASSIC ? 'center' : 'flex-start'
  }};
  width: 100%;
`
// 180 is the sidebar full width
export const ContentWrapper = styled.div<{ offsetLeft: boolean }>`
  margin-left: ${({ offsetLeft }) => (offsetLeft ? '180px' : '0')};
  /* for global blur */
  transition: filter 0.25s;
`
