import styled from 'styled-components'

import Img from '../../Img'
import { theme } from '../../../utils'

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
