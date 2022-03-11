import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'
import { BaseBar } from './index'

export const Wrapper = styled(BaseBar)`
  ${css.flex()};
  position: relative;
  padding: 10px;
`

export const WarningIcon = styled(Img)`
  fill: ${theme('baseColor.red')};
  ${css.size(30)};
  margin-right: 15px;
  margin-left: 5px;
`

export const Info = styled.div`
  ${css.flexColumn()};
`

export const Title = styled.div`
  font-size: 15px;
  color: ${theme('shell.title')};
`

export const Desc = styled.div`
  color: ${theme('shell.desc')};
  font-size: 14px;
`
