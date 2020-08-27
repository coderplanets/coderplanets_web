import styled from 'styled-components'

import { cs, theme } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div`
  margin-top: 10px;
`
export const Item = styled.div`
  ${cs.flex('align-center')};
  margin-bottom: 5px;
`
export const Icon = styled(Img)`
  fill: ${theme('banner.desc')};
  width: 15px;
  height: 15px;
  display: block;
`
export const OnlineDot = styled.div`
  width: 8px;
  height: 8px;
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
