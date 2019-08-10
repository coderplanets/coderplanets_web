import styled from 'styled-components'

import { TYPE } from '@constant'
import { theme, animate, cs } from '@utils'

import Img from '@components/Img'

export const Wrapper = styled.div`
  width: 10%;
  ${cs.flexColumn('align-end')};
  ${cs.media.mobile`display: none`};
`

const closeWith = '40px'

export const CloseTab = styled.div`
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
    animation: ${animate.rotate360CloseRule};
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

export const CloserInner = styled.div`
  width: ${closeWith};
  height: 45px;
  background-color: ${theme('preview.bg')};
  border-right: 1px solid ${theme('preview.bg')};
  transform-origin: right center 0;
  transform: rotate3d(0, 1, 0, -30deg);
  box-shadow: ${theme('preview.closerShadow')};
`

export const UploadingTab = styled.div`
  ${cs.flexColumn('justify-evenly')};
  align-items: center;
  opacity: ${({ show }) => (show ? 1 : 0)};

  color: ${theme('preview.font')};
  background-color: ${theme('preview.bg')};
  width: 35px;
  height: 70px;
  box-shadow: ${theme('preview.closerShadow')};
  margin-top: 15px;
  transform: rotate3d(0, 1, 0, -30deg);
  transform-origin: right center 0;
  border-top-left-radius: 13px;
  border-bottom-left-radius: 13px;

  transition: opacity 0.3s linear;
`

export const UploadImgIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  width: 20px;
  height: 17px;
  display: block;
`

export const UploadLoadingIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  width: 22px;
  height: 20px;
  display: block;
  animation: ${animate.rotate360Rule};
`
