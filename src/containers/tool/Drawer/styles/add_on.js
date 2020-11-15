import styled from 'styled-components'

import { TYPE } from '@/constant'
import { theme, animate, css } from '@/utils'

import Img from '@/Img'

export const Wrapper = styled.div`
  width: 10%;
  ${css.flexColumn('align-end')};

  ${css.media.mobile`
    width: 0;
  `};
`
const closeWith = '40px'

export const CloseTab = styled.div`
  float: right;
  width: ${closeWith};
  height: ${closeWith};
  perspective: ${closeWith};
  cursor: pointer;
  display: ${({ type }) =>
    type === TYPE.DRAWER.ACCOUNT_EDIT ? 'none' : 'block'};

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
    color: ${theme('drawer.font')};
    font-weight: lighter;
  }
  ${css.media.mobile`display: none`};
`

export const CloserInner = styled.div`
  width: ${closeWith};
  height: 45px;
  background-color: ${theme('drawer.bg')};
  border-right: 1px solid ${theme('drawer.bg')};
  transform-origin: right center 0;
  transform: rotate3d(0, 1, 0, -30deg);
  box-shadow: ${theme('drawer.closerShadow')};
`
export const MobileCloser = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: block;

  &:after {
    content: '^';
    position: absolute;
    font-size: 26px;
    color: ${theme('drawer.font')};
    font-weight: lighter;
  }
`
export const UploadingTab = styled.div`
  ${css.flexColumn('justify-evenly')};
  align-items: center;
  opacity: ${({ show }) => (show ? 1 : 0)};

  color: ${theme('drawer.font')};
  background-color: ${theme('drawer.bg')};
  width: 35px;
  height: 70px;
  box-shadow: ${theme('drawer.closerShadow')};
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
  animation: ${animate.rotate360} 1s linear infinite;
`
