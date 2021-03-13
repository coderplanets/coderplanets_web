import styled from 'styled-components'
import { contains } from 'ramda'

import { TTestable, TActive } from '@/types'
import { theme, css } from '@/utils'

import {
  WIDE_CASE,
  WIDE_WIDTH,
  NARROW_WIDTH,
  getTransform,
  getMobileContentHeight,
  getContentLinearGradient,
  getDim,
} from './metrics'

type TSwipe = {
  swipeUpY: number
  swipeDownY: number
  options: Record<string, unknown>
}

type TDrawer = TTestable &
  TActive &
  TSwipe & {
    mobile: boolean
    rightOffset: string
    type: string
  }

export const DrawerOverlay = styled.div<TActive>`
  bottom: 0;
  left: 0;
  overflow: auto;
  position: fixed;
  height: 100%;
  right: 0;
  z-index: ${css.zIndex.drawerOverlay};
  top: 0;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
`
// see https://stackoverflow.com/questions/60079950/when-do-i-use-attrs-vs-passing-props-directly-with-styled-components

// TL;DR:
// - Use styled components for static styles and dynamic styles that don't change very often;
// - Use inline styles (through .attrs) for styles that change frequently, like for animations.
export const DrawerWrapper = styled.div.attrs(
  ({ testid, visible, mobile, swipeUpY, swipeDownY, options }: TDrawer) => ({
    'data-test-id': testid,
    style: {
      transform: getTransform(visible, mobile, swipeUpY, swipeDownY, options),
    },
  }),
)<TDrawer>`
  ${css.flex()};
  position: fixed;
  right: ${({ rightOffset }) => rightOffset};
  top: 0px;

  color: ${theme('drawer.font')};
  box-sizing: border-box;
  transition: transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  font-family: Roboto, sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  border-radius: 0px;
  height: 100%;
  width: ${({ type }) =>
    contains(type, WIDE_CASE) ? WIDE_WIDTH : NARROW_WIDTH};

  min-width: ${({ type }) => (contains(type, WIDE_CASE) ? '700px' : '450px')};
  max-width: 1000px;
  /* transform: ${({ visible, mobile, swipeUpY, swipeDownY, options }) =>
    getTransform(visible, mobile, swipeUpY, swipeDownY, options)}; */
  z-index: ${css.zIndex.drawer};
  /* 
   * if the screen width > maxContent, then use display instead of visibility
   * otherwise the Drawer will show up from screen edge
   * ----
   * 当屏幕宽度大于 maxContent 时，使用 display 作为出现的控制属性，否则 Drawer 会从
   * 屏幕最边缘滑出
   *
  */
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  ${css.media.maxContent`
    visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  `};

  ${css.media.mobile`
    right: 0;
    width: 100%;
    min-width: 100%;
    overflow: scroll;
    height: auto;
  `};
`

export const DrawerContent = styled.div`
  width: 90%;
  background-color: ${theme('drawer.bg')};
  height: 100vh;
  box-shadow: ${theme('drawer.shadow')};
`
type TDrawerMobile = { options: Record<string, unknown>; bgColor: string }
export const DrawerMobileContent = styled.div<TDrawerMobile>`
  width: 100%;
  height: ${({ options }) => getMobileContentHeight(options)};
  box-shadow: ${theme('drawer.shadow')};
  background: ${({ options, bgColor }) =>
    getContentLinearGradient(options, bgColor)};
`

export const MobileInnerContent = styled.div.attrs(
  ({ swipeUpY, swipeDownY, options }: TSwipe) => ({
    style: {
      filter: getDim(swipeUpY, swipeDownY, options),
    },
  }),
)<TSwipe>`
  width: 100%;
  max-height: calc(100% - 30px);
  margin-top: ${({ options }) =>
    options.direction === 'bottom' ? '15px' : '0'};
  overflow-y: scroll;
  transition: filter 0.3s;
`
export const PreviewHeader = styled.div`
  ${css.flex()};
  border-bottom: 1px solid grey;
  line-height: 30px;
`
