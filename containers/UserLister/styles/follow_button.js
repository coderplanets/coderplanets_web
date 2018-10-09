import styled from 'styled-components'

import Img from '../../../components/Img'
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
  fill: ${theme('banner.title')};
`
export const WatchedIcon = styled(BtnIcon)`
  fill: ${theme('button.fg')};
`
export const Popinfo = styled.div`
  color: ${theme('thread.articleTitle')};
  padding: 5px 8px;
`
