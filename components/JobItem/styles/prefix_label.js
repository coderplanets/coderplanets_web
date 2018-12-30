import styled from 'styled-components'

import PinSVG from '../../SvgIcons/PinSVG'
import { theme } from '../../../utils'

export const ReadedLabel = styled.div`
  position: absolute;
  top: 10px;
  left: -20px;
  font-size: 0.8rem;
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
`
export const PinIcon = styled(PinSVG)`
  fill: ${theme('thread.articleDigest')};
  position: absolute;
  width: 22px;
  height: 22px;
  top: 10px;
  left: -20px;
`
