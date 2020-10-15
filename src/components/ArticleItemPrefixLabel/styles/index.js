import styled from 'styled-components'

import { theme, css } from '@/utils'
import PinSVG from '@/SvgIcons/PinSVG'

export const ReadedLabel = styled.div`
  color: ${theme('thread.articleDigest')};
  position: absolute;
  top: ${({ topOffset }) => topOffset};
  left: -24px;
  font-size: 12px;
  opacity: 0.9;
  font-style: italic;
  ${css.media.mobile`
    left: -12px;
    font-size: 0.8rem;
  `};
`
export const PinIcon = styled(PinSVG)`
  fill: ${theme('thread.articleDigest')};
  position: absolute;
  width: 18px;
  height: 18px;
  top: ${({ top }) => top};
  left: -24px;

  ${css.media.mobile`
    width: 16px;
    height: 16px;
    top: 35px;
    left: -20px;
  `};
`
