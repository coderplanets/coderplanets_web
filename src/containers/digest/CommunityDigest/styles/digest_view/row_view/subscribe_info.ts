import styled from 'styled-components'

import { css, theme } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div`
  width: 100%;
`
export const Item = styled.div`
  ${css.flex('align-center', 'justify-between')};
  margin-bottom: 5px;
`
export const StateItem = styled.div`
  ${css.flex('align-center')};
`
export const Icon = styled(Img)`
  fill: ${theme('banner.desc')};
  ${css.size(15)};
`
export const OnlineDot = styled.div`
  ${css.size(8)};
  margin-right: 3px;
  margin-left: 3px;
  border-radius: 50%;
  background: ${theme('baseColor.green')};
`
export const Desc = styled.span`
  color: ${theme('banner.desc')};
  font-size: 14px;
  margin-left: 10px;
`
