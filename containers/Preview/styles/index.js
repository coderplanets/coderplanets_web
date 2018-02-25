import styled, { keyframes } from 'styled-components'

import R from 'ramda'
import { theme, TYPE } from '../../../utils'

const WIDE_CASE = [TYPE.POST_PREVIEW_VIEW, TYPE.PREVIEW_CREATE_POST]
const WIDE_WIDTH = '70%'
const NARROW_WIDTH = '40%'

function doTransform(visible) {
  return visible ? 'translate(0px, 0px)' : 'translate(105%, 0px)'
}

export const PreviewOverlay = styled.div`
  bottom: 0;
  left: 0;
  overflow: auto;
  position: fixed;
  height: 100%;
  right: 0;
  z-index: 998;
  top: 0;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`
// z-index: 1001;
// z-index: ${props => (props.visible ? 1001 : -1)};
// display: ${props => (props.visible ? 'block' : 'none')};
// visibility: ${props => (props.visible ? 'visible' : 'hidden')};

export const PreviewWrapper = styled.div`
  color: ${theme('preview.font')};
  box-sizing: border-box;
  transition: transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  font-family: Roboto, sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  border-radius: 0px;
  height: 100%;
  width: ${props =>
    R.contains(props.type, WIDE_CASE) ? WIDE_WIDTH : NARROW_WIDTH};
  max-width: 1000px;
  right: 0;
  position: fixed;
  transform: ${props => doTransform(props.visible)};
  top: 0px;
  overflow: auto;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
`
export const PreviewContent = styled.div`
  width: 90%;
  background-color: ${theme('preview.bg')};
  height: 100%;
  overflow-y: scroll;
  box-shadow: ${theme('preview.shadow')};
`
export const PreviewHeader = styled.div`
  border-bottom: 1px solid grey;
  line-height: 30px;
  display: flex;
`

export const PreviewCloser = styled.div`
  width: 10%;
`

const closeWith = '40px'

export const CloserInner = styled.div`
  width: ${closeWith};
  height: 45px;
  background-color: ${theme('preview.bg')};
  border-right: 1px solid ${theme('preview.bg')};
  transform-origin: right center 0;
  transform: rotate3d(0, 1, 0, -30deg);
  box-shadow: -6px 4px 5px 2px rgba(156, 154, 154, 0.2);
`
// box-shadow: -5px 0px 14px 0px rgba(189, 189, 189, 0.37);

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
export const Closer = styled.div`
  float: right;
  width: ${closeWith};
  height: ${closeWith};
  perspective: ${closeWith};
  cursor: pointer;
  display: ${props =>
    props.type === TYPE.ACCOUNT_PREVIEW_VIEW ? 'none' : 'block'};

  &:hover:after {
    animation: ${rotate360} 2s cubic-bezier(0, 0.56, 0.24, 0.72);
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
