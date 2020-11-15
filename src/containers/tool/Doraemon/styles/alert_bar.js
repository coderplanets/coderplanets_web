import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'
import { BaseBar } from './index'

export const Wrapper = styled(BaseBar)`
  ${css.flex()};
  position: relative;
  padding: 10px;
`

export const WarningIcon = styled(Img)`
  fill: ${theme('baseColor.red')};
  ${css.size(30)};
  display: block;
  margin-right: 15px;
  margin-left: 5px;
`

export const Info = styled.div`
  ${css.flexColumn()};
`

export const Title = styled.div`
  font-size: 1rem;
  color: ${theme('shell.title')};
`

export const Desc = styled.div`
  color: ${theme('shell.desc')};
`
