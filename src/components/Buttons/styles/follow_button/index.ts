import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'
import animate from '@/utils/animations'
import Button from '@/components/Buttons/Button'
import Img from '@/Img'

export const BtnWrapper = styled.div`
  ${css.flex('align-center')};
  padding: 2px 5px;
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
export const Popinfo = styled.div`
  color: ${theme('thread.articleTitle')};
  padding: 5px 8px;
`

export const LoadingIcon = styled(BtnIcon)<{ light: boolean }>`
  fill: ${({ light }) =>
    light ? theme('button.fg') : theme('thread.articleTitle')};

  ${css.size(15)};
  animation: ${animate.rotate360} 1s linear infinite;
`
export const CheckedIcon = styled(BtnIcon)`
  fill: ${theme('baseColor.green')};
`
export const FollowedButton = styled(Button)`
  border-radius: 10px;
`
export const FollowingButton = styled(Button)`
  color: ${theme('thread.articleTitle')};
  /* color: ${theme('baseColor.green')}; */
  border: none;
  border-radius: 10px;
  background: #003745;
  padding-top: 2px;
  padding-bottom: 2px;

  &:hover {
    background: #003745;
    /* border: 1px solid; */
  }
`
