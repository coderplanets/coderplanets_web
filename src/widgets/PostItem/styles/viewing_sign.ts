import styled from 'styled-components'

import css, { animate, theme } from '@/utils/css'
import ViewSVG from '@/icons/View'

export const Wrapper = styled.div<{ top: number }>`
  ${css.flex()};
  position: absolute;
  left: -30px;
  top: ${({ top }) => `${top}px`};
  animation: ${animate.fadeInRight} 0.25s linear;
`
export const ViewIcon = styled(ViewSVG)`
  ${css.size(10)};
  fill: ${theme('thread.articleDigest')};
`
