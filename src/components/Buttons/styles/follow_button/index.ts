import styled from 'styled-components'

import { theme, animate, css } from '@/utils'
import Img from '@/Img'

export const BtnWrapper = styled.div`
  ${css.flex('align-center')};
`
const BtnIcon = styled(Img)`
  height: 12px;
  width: 12px;
  display: block;
  margin-right: 3px;
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
