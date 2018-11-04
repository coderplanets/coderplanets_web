import styled from 'styled-components'

import Img from '../../Img'
import { theme, animate } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
export const LoadingIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  width: 26px;
  height: 26px;
  animation: ${animate.rotate360} 2s linear infinite;
  display: block;
  margin-right: 3px;
`
export const LoadingText = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 0.9rem;
`
