import styled from 'styled-components'

import { Img } from '../../../components'
import { Animate } from '../../../utils'

export const ExtraWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const ExtraItem = styled.div`
  color: #b7cfd0;
  display: flex;
  &:hover {
    color: #51abb2;
    animation: ${Animate.pulse} 0.4s linear;
  }
`

export const ExtraDivider = styled(Img)`
  fill: #75898a;
  width: 10px;
  height: 10px;
  margin-left: 4px;
  margin-right: 4px;
`
export const ExtraItemTitle = styled.div`
  cursor: pointer;
  font-size: 1.2em;
`
export const ExtraItemIcon = styled(Img)`
  fill: #b7cfd0;
  width: 17px;
  height: 17px;
  margin-right: 3px;
  margin-top: 2px;

  ${ExtraItem}:hover & {
    fill: #51abb2;
  }
`
