import styled from 'styled-components'

import css, { animate, theme } from '@/utils/css'
import ViewSVG from '@/icons/View'

export const Wrapper = styled.div`
  ${css.flex()};
  position: absolute;
  left: -28px;
  top: 11px;
  animation: ${animate.fadeInRight} 0.25s linear;
`
export const ViewIcon = styled(ViewSVG)`
  ${css.size(10)};
  fill: ${theme('thread.articleTitle')};
`
export const Title = styled.div``
