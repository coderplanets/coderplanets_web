import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import PinSVG from '@/icons/Pin'
import { pixelAdd } from '@/utils/dom'

type TPos = { top: number; left: number }

export const ReadedLabel = styled.div<TPos>`
  background: ${theme('thread.articleDigest')};
  ${css.circle(8)};
  position: absolute;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  opacity: 0.5;

  ${css.media.mobile`
    ${css.circle(6)};
  `};
`
export const PinIcon = styled(PinSVG)<TPos>`
  fill: ${theme('thread.articleDigest')};
  position: absolute;
  ${css.size(18)};
  top: ${({ top }) => pixelAdd(`${top}px`, -4)};
  left: ${({ left }) => `${left}px`};
  opacity: 0.8;
  transform: rotate(-30deg);
`
