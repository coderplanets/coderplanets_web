import styled from 'styled-components'

import { contains } from 'ramda'

import { TYPE } from '@/constant'
import { theme, animate, cs } from '@/utils'

const WIDE_CASE = [
  // post
  TYPE.PREVIEW_POST_VIEW,
  TYPE.PREVIEW_POST_CREATE,
  TYPE.PREVIEW_POST_EDIT,
  // job
  TYPE.PREVIEW_JOB_VIEW,
  TYPE.PREVIEW_JOB_CREATE,
  TYPE.PREVIEW_JOB_EDIT,
  // repo
  TYPE.PREVIEW_REPO_VIEW,
  TYPE.PREVIEW_REPO_CREATE,
  // video
  TYPE.PREVIEW_VIDEO_VIEW,
  // mails
  TYPE.PREVIEW_MAILS_VIEW,
]
const WIDE_WIDTH = '70%'
const NARROW_WIDTH = '40%'

const doTransform = (visible, mobile) => {
  if (mobile) {
    // return visible ? 'translate(0px, 40%)' : 'translate(0, 100%)' // fromBottom
    return visible ? 'translate(0, 0)' : 'translate(0, -80%)' // fromTop
  }

  return visible ? 'translate(0px, 0px)' : 'translate(105%, 0px)' // fromRight
}

export const PreviewOverlay = styled.div`
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
export const PreviewWrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  position: fixed;
  right: ${({ rightOffset }) => rightOffset};
  top: 0px;
  ${cs.flex()};
  /* display: ${({ visible }) => (visible ? 'flex' : 'none')}; */
  visibility: ${({ visible }) => (visible ? 'visiable' : 'hidden')};

  color: ${theme('preview.font')};
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
  transform: ${({ visible, mobile }) => doTransform(visible, mobile)};
  z-index: ${cs.zIndex.preview};

  ${cs.media.mobile`
    right: 0;
    width: 100%;
    min-width: 100%;
    overflow: scroll;
    height: 80%;
    border-bottom: 2px dashed;
  `};
`
export const PreviewContent = styled.div`
  width: 90%;
  background-color: ${theme('preview.bg')};
  height: 100vh;
  overflow-y: scroll;
  box-shadow: ${theme('preview.shadow')};

  ${cs.media.mobile`
    width: 100%;
  `};
`
export const PreviewHeader = styled.div`
  ${cs.flex()};
  border-bottom: 1px solid grey;
  line-height: 30px;
`
const closeWith = '40px'

export const CloserInner = styled.div`
  width: ${closeWith};
  height: 45px;
  background-color: ${theme('preview.bg')};
  border-right: 1px solid ${theme('preview.bg')};
  transform-origin: right center 0;
  transform: rotate3d(0, 1, 0, -30deg);
  box-shadow: ${theme('preview.closerShadow')};
`
// box-shadow: -5px 0px 14px 0px rgba(189, 189, 189, 0.37);

export const Closer = styled.div`
  float: right;
  width: ${closeWith};
  height: ${closeWith};
  perspective: ${closeWith};
  cursor: pointer;
  display: ${({ type }) =>
    type === TYPE.PREVIEW_ACCOUNT_VIEW ||
    type === TYPE.PREVIEW_USER_VIEW ||
    type === TYPE.PREVIEW_ACCOUNT_EDIT
      ? 'none'
      : 'block'};

  &:hover:after {
    animation: ${animate.rotate360Close} 2s cubic-bezier(0, 0.56, 0.24, 0.72);
    font-weight: bold;
  }
  &:after {
    content: '✕';
    position: absolute;
    top: 9px;
    right: 6px;
    font-size: large;
    color: ${theme('preview.font')};
    font-weight: lighter;
  }
`
