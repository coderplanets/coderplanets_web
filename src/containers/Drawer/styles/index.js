import styled from 'styled-components'

import { contains } from 'ramda'

import { theme, cs } from '@/utils'

import {
  WIDE_CASE,
  WIDE_WIDTH,
  NARROW_WIDTH,
  getTransform,
  getContentLinearGradient,
} from './metrics'

export const DrawerOverlay = styled.div`
  bottom: 0;
  left: 0;
  overflow: auto;
  position: fixed;
  height: 100%;
  right: 0;
  z-index: ${cs.zIndex.previewOverlay};
  top: 0;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
`
export const DrawerWrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${cs.flex()};
  position: fixed;
  right: ${({ rightOffset }) => rightOffset};
  top: 0px;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};

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
  transform: ${({ visible, mobile, animation }) =>
    getTransform(visible, mobile, animation)};
  z-index: ${cs.zIndex.drawer};

  ${cs.media.mobile`
    right: 0;
    width: 100%;
    min-width: 100%;
    overflow: scroll;
    height: auto;
    max-height: 80%;
  `};
`

export const DrawerContent = styled.div`
  width: 90%;
  background-color: ${theme('drawer.bg')};
  height: 100vh;
  box-shadow: ${theme('drawer.shadow')};
`
export const DrawerMobileContent = styled.div`
  width: 100%;
  height: auto;
  box-shadow: ${theme('drawer.shadow')};
  background: ${({ animation, bgColor }) =>
    getContentLinearGradient(animation, bgColor)};
`
// bottom
export const MobileInnerContent = styled.div`
  width: 100%;
  max-height: ${({ animation }) =>
    animation.from === 'bottom' ? 'calc(100% - 100px)' : 'calc(100% - 30px)'};
  margin-top: ${({ animation }) =>
    animation.from === 'bottom' ? '15px' : '0'};
  overflow-y: scroll;
`
// export const MobileContentInnerWrapper = styled.div`
//   width: 100%;
//   max-height: calc(100% - 30px);
//   overflow-y: scroll;
// `
export const PreviewHeader = styled.div`
  ${cs.flex()};
  border-bottom: 1px solid grey;
  line-height: 30px;
`
