import styled from 'styled-components'

import { theme, css, pixelAdd } from '@/utils'
import PinSVG from '@/SvgIcons/PinSVG'

export const ReadedLabel = styled.div<{ topOffset: string }>`
  background: ${theme('thread.articleDigest')};
  width: 8px;
  height: 3px;
  border-radius: 3px;
  position: absolute;
  top: ${({ topOffset }) => topOffset};
  left: -30px;
  opacity: 0.5;
  ${css.media.mobile`
    left: -12px;
    font-size: 0.8rem;
  `};
`
export const PinIcon = styled(PinSVG)`
  fill: ${theme('thread.articleDigest')};
  position: absolute;
  ${css.size(18)};
  top: ${({ top }) => pixelAdd(top, -4)};
  left: -35px;
  opacity: 0.8;
  transform: rotate(-30deg);

  ${css.media.mobile`
    ${css.size(16)};
    top: 35px;
    left: -20px;
  `};
`
