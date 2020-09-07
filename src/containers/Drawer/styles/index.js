import styled from 'styled-components'

import { contains } from 'ramda'

import { TYPE } from '@/constant'
import { theme, cs } from '@/utils'

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
  transform: ${({ visible, mobile }) => doTransform(visible, mobile)};
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
export const PreviewContent = styled.div`
  width: 90%;
  background-color: ${theme('drawer.bg')};
  height: 100vh;
  box-shadow: ${theme('drawer.shadow')};

  ${cs.media.mobile`
    width: 100%;
    height: auto;
    background: linear-gradient(180deg, ${theme(
      'drawer.bg',
    )} calc(100% - 30px),transparent 30px);
  `};
`
export const ContentInnerWrapper = styled.div`
  width: 100%;
  max-height: calc(100% - 30px);
  overflow-y: scroll;
`
export const PreviewHeader = styled.div`
  ${cs.flex()};
  border-bottom: 1px solid grey;
  line-height: 30px;
`
