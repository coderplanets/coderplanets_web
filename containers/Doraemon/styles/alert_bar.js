import styled from 'styled-components'

import Img from 'components/Img'
import { theme, cs } from 'utils'
import { BaseBar } from './index'

export const Wrapper = styled(BaseBar)`
  ${cs.flex()};
  position: relative;
  padding: 10px;
`

export const WarningIcon = styled(Img)`
  fill: ${theme('baseColor.error')};
  width: 30px;
  height: 30px;
  display: block;
  margin-right: 15px;
  margin-left: 5px;
`

export const Info = styled.div`
  ${cs.flexColumn()};
`

export const Title = styled.div`
  font-size: 1rem;
  color: ${theme('shell.title')};
`

export const Desc = styled.div`
  color: ${theme('shell.desc')};
`
