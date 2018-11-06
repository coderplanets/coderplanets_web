import styled from 'styled-components'

import Img from '../../Img'
import { theme, cs, animate } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
`
export const LoadingIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  width: 26px;
  height: 26px;
  animation: ${animate.rotate360Rule};
  display: block;
  margin-right: 3px;
`
export const LoadingText = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 0.9rem;
`
