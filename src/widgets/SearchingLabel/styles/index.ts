import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'
import animate from '@/utils/animations'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
`
export const LoadingIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  ${css.size(26)};
  animation: ${animate.rotate360} 1s linear infinite;
  margin-right: 3px;
`
export const LoadingText = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 0.9rem;
`
