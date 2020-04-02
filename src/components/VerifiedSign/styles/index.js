import styled from 'styled-components'

import Img from '@Img'
import { cs, theme } from '@utils'

export const PopContentWrapper = styled.div`
  text-align: left;
  width: 200px;
  font-size: 13px !important;
  line-height: 1.6;
`
export const PopHeader = styled.div`
  ${cs.flex('align-center')}
  margin-bottom: 10px;
`
export const PopHeaderIcon = styled(Img)`
  fill: ${theme('baseColor.green')};
  display: block;
  padding: 0;
  margin-right: 4px;
  width: 14px;
  height: 14px;
`
export const PopHeaderText = styled.div`
  color: ${theme('baseColor.green')};
  font-size: 13px;
  font-weight: bold;
`
export const PopHighlight = styled.span`
  font-size: 14px;
  font-weight: bold;
`
export const RulesWrapper = styled.div`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 5px;
  z-index: 100000;
`
