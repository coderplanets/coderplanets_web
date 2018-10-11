import styled from 'styled-components'

import Img from '../../Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
`
export const Label = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`
export const LabelIcon = styled(Img)`
  width: 18px;
  height: 18px;
  fill: ${theme('banner.title')};
  display: block;
  &:hover {
    fill: ${theme('tabs.headerActive')};
  }
`
export const LabelText = styled.div`
  font-size: 0.9rem;
`
