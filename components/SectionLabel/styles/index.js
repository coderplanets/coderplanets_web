import styled from 'styled-components'

import Img from '../../Img'
import { theme, animate } from '../../../utils'

export const Wrapper = styled.div`
  margin-top: 10px;
`

export const Label = styled.div`
  display: flex;
`

export const Title = styled.div`
  color: ${theme('tabs.headerActive')};
  font-size: 0.9rem;
  flex-grow: 1;
`
export const AddonWrapper = styled.div`
  margin-right: 5%;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  &:active {
    animation: ${animate.pulse} 0.3s linear;
  }
`
export const Divider = styled.div`
  border-bottom: 1px solid;
  border-color: ${theme('banner.desc')};
  margin-top: 12px;
  margin-bottom: 18px;
  width: 95%;
  opacity: 0.3;
`

export const LabelIcon = styled(Img)`
  fill: ${theme('tabs.headerActive')};
  width: 18px;
  height: 18px;
  margin-right: 5px;
  margin-left: 5px;
  margin-top: 2px;
`

export const Desc = styled.div`
  color: ${theme('banner.desc')};
  font-size: 0.8rem;
  margin-bottom: 18px;
  margin-left: 3px;
`
