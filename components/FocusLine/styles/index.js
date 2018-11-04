import styled from 'styled-components'

import Img from '../../Img'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flex('align-end')};
  color: ${theme('banner.desc')};
`
export const TextWrapper = styled.div`
  ${cs.flex()};
  font-size: 0.9rem;
  align-items: baseline;
`
export const Text = styled.div``
export const Icon = styled(Img)`
  fill: ${theme('banner.desc')};
  width: 16px;
  height: 16px;
  margin-right: 3px;
  display: ${({ show }) => (show ? '' : 'none')};
`
export const Focus = styled.div`
  font-size: 1.1rem;
  color: ${theme('contrastFg')};
  margin-left: 3px;
  margin-right: 3px;
`
