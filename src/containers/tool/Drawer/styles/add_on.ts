import styled from 'styled-components'

import type { TActive } from '@/spec'
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

type TCloseBtn = { type: string }
export const CloseBtn = styled(Img)<TCloseBtn>`
  fill: ${theme('font')};
  position: absolute;
  display: ${({ type }) =>
    type === TYPE.DRAWER.ACCOUNT_EDIT ? 'none' : 'block'};
  width: ${closeWith};
  height: ${closeWith};
  top: 15px;
  left: 60px;
  ${css.size(30)};
  z-index: ${css.zIndex.drawer};

  &:hover {
    animation: ${animate.rotate360} 2s cubic-bezier(0, 0.56, 0.24, 0.72);
    font-weight: bold;
    cursor: pointer;
  }

  ${css.media.mobile`display: none`};
`
export const EscHint = styled.div`
  color: ${theme('font')};
  opacity: 0.9;
  position: absolute;
  top: 48px;
  left: 63px;
  font-size: 13px;
  z-index: ${css.zIndex.drawer};
`
export const MobileCloser = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  ${css.size(30)};
  cursor: pointer;

  &:after {
    content: '^';
    position: absolute;
    font-size: 26px;
    color: ${theme('drawer.font')};
    font-weight: lighter;
  }
`
export const UploadingTab = styled.div<TActive>`
  ${css.flexColumn('justify-evenly', 'align-center')};
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
  ${css.size(22)};
  animation: ${animate.rotate360} 1s linear infinite;
`
