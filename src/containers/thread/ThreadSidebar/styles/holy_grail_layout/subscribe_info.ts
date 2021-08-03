import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flex('justify-between')};
  width: 100%;
`
export const Item = styled.div`
  ${css.flexColumn('align-start', 'justify-between')};
  margin-bottom: 5px;
`
export const StateItem = styled.div`
  ${css.flexColumn('align-start')};
`
export const Number = styled.div`
  font-size: 16px;
  color: #139c9e;
  margin-bottom: 5px;
`
export const Desc = styled.span`
  color: ${theme('banner.desc')};
  font-size: 12px;
`
export const OnlineDesc = styled.div`
  ${css.flex('align-center')};
  font-size: 12px;
  margin-left: -10px;
`
export const OnlineDot = styled.div`
  ${css.size(4)};
  margin-right: 3px;
  margin-left: 3px;
  border-radius: 50%;
  background: ${theme('baseColor.green')};
`
export const Icon = styled(Img)`
  fill: ${theme('banner.desc')};
  ${css.size(15)};
`
