import styled from 'styled-components'

import { theme, animate, cs } from '@utils'
import Img from '@Img'

export const BtnWrapper = styled.div`
  ${cs.flex('align-center')};
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

export const LoadingIcon = styled(BtnIcon)`
  fill: ${({ light }) =>
    light ? theme('button.fg') : theme('thread.articleTitle')};

  height: 15px;
  width: 15px;
  animation: ${animate.rotate360Rule};
`
