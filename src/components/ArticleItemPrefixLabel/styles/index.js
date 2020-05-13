import styled from 'styled-components'

import { theme, cs } from '@/utils'
import PinSVG from '@/SvgIcons/PinSVG'

export const ReadedLabel = styled.div`
  color: ${theme('thread.articleDigest')};
  position: absolute;
  top: ${({ topoffset }) => topoffset};
  left: -18px;
  font-size: 0.9rem;
  opacity: 0.9;
  font-style: italic;
  ${cs.media.mobile`
    left: -12px;
    font-size: 0.8rem;
  `};
`
export const PinIcon = styled(PinSVG)`
  fill: ${theme('thread.articleDigest')};
  position: absolute;
  width: 22px;
  height: 22px;
  top: ${({ topoffset }) => topoffset};
  left: -22px;
  ${cs.media.mobile`
    width: 18px;
    height: 18px;
    left: -12px;
  `};
`
