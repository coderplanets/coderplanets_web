import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const PopContentWrapper = styled.div`
  text-align: left;
  width: 200px;
  font-size: 13px !important;
  line-height: 1.6;
`
export const PopHeader = styled.div`
  ${css.flex('align-center')}
  margin-bottom: 10px;
`
export const PopHeaderIcon = styled(Img)`
  fill: ${theme('baseColor.green')};
  padding: 0;
  margin-right: 4px;
  ${css.size(14)};
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
