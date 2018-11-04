import styled from 'styled-components'

import Img from '../../Img'
import { theme, animate } from '../../../utils'

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
`
const BtnIcon = styled(Img)`
  height: 15px;
  width: 15px;
  display: block;
  margin-right: 3px;
`
export const WatchIcon = styled(BtnIcon)`
  height: 12px;
  width: 12px;
  fill: ${theme('button.fg')};
`
export const WatchedIcon = styled(BtnIcon)`
  fill: ${theme('banner.title')};
`
export const Popinfo = styled.div`
  color: ${theme('thread.articleTitle')};
  padding: 5px 8px;
`

export const LoadingIcon = styled(BtnIcon)`
  fill: ${({ light }) =>
    light ? theme('button.fg') : theme('thread.articleTitle')};

  height: 20px;
  width: 20px;
  animation: ${animate.rotate360} 1s linear infinite;
`
