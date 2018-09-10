import styled from 'styled-components'

import { Button, Img } from '../../../components'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const StateButton = styled(Button)`
  width: 80px;
  display: flex;
`
export const StateIcon = styled(Img)`
  width: 12px;
  height: 100%;
  cursor: pointer;
  margin-right: 8px;
  margin-top: 2px;
`

export const DividerIcon = styled(Img)`
  fill: ${theme('header.fg')};
  width: 18px;
  height: 20px;
  margin-top: 5px;
  margin-left: 3px;
  margin-right: 3px;
`
