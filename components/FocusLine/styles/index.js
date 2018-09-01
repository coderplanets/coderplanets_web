import styled from 'styled-components'

import { theme } from '../../../utils'
import { Img } from '../..'

export const Wrapper = styled.div`
  color: ${theme('banner.desc')};
  display: flex;
  align-items: flex-end;
`
export const TextWrapper = styled.div`
  font-size: 0.9rem;
  display: flex;
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
  color: ${theme('banner.title')};
  margin-left: 3px;
  margin-right: 3px;
`
