import styled from 'styled-components'

import PinSVG from '../../SvgIcons/PinSVG'
import { theme } from '../../../utils'

export const ReadedLabel = styled.div`
  color: ${theme('thread.articleDigest')};
  position: absolute;
  top: 14px;
  left: -22px;
  font-size: 1rem;
  opacity: 0.9;
  font-style: italic;
`

export const PinIcon = styled(PinSVG)`
  fill: ${theme('thread.articleDigest')};
  position: absolute;
  width: 22px;
  height: 22px;
  top: 14px;
  left: -22px;
`
