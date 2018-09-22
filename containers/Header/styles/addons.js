import styled from 'styled-components'

import { Img } from '../../../components'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const StateIcon = styled(Img)`
  fill: ${theme('header.fg')};
  width: 22px;
  height: 26px;
  cursor: pointer;
  margin-top: 5px;
  transform: rotate(180deg);
`

export const Divider = styled.div`
  border-left: 1px solid;
  border-color: ${theme('header.fg')};
  height: 15px;
  margin-left: 10px;
  margin-right: 6px;
  opacity: 0.7;
`
export const DividerIcon = styled(Img)`
  fill: ${theme('header.fg')};
  width: 18px;
  height: 20px;
  margin-top: 5px;
  margin-left: 3px;
  margin-right: 3px;
`
