import styled from 'styled-components'

import css, { theme, animate } from '@/utils/css'
import Button from '@/widgets/Buttons/Button'
import Img from '@/Img'

import JoinEyeSVG from '@/icons/JoinEye'

export const BtnWrapper = styled.div`
  ${css.flex('align-center')};
  padding: 2px 4px;
`
export const FollowingBtnWrapper = styled.div`
  ${css.flex('align-center')};
  padding: 2px 0px;
`
const BtnIcon = styled(Img)`
  ${css.size(14)};
  margin-right: 2px;
`
export const WatchIcon = styled(BtnIcon)`
  fill: ${theme('button.fg')};
`
export const WatchedIcon = styled(BtnIcon)`
  fill: ${theme('banner.title')};
`
export const BtnText = styled.div`
  padding-top: 2px;
`
export const Popinfo = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 12px;
  padding: 5px 8px;
`

export const LoadingIcon = styled(BtnIcon)<{ light: boolean }>`
  fill: ${({ light }) =>
    light ? theme('button.fg') : theme('thread.articleTitle')};

  ${css.size(15)};
  animation: ${animate.rotate360} 1s linear infinite;
`
export const FollowingIcon = styled(JoinEyeSVG)`
  fill: ${theme('baseColor.green')};
  ${css.size(15)};
  margin-right: 3px;
  transform: scaleX(0.9);
  margin-top: -1px;
  ${BtnWrapper}:hover & {
    fill: ${theme('thread.articleTitle')};
  }
`
export const FollowedButton = styled(Button)`
  border-radius: 10px;
  padding-top: 2px;
`
export const FollowingButton = styled(Button)<{ followingOffset: number }>`
  color: ${theme('baseColor.green')};
  font-weight: bold;
  border: none;
  border-radius: 8px;
  margin-left: ${({ followingOffset }) => `${followingOffset}px` || 0};
  /* background: #034556; */
  padding-top: 2px;
  padding-bottom: 2px;

  &:hover {
    color: ${theme('thread.articleTitle')};
    background: #034556;
  }
`
