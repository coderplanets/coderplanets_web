import styled from 'styled-components'

import Img from '../../../components/Img'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flex('justify-between')};
  align-items: center;
  background-color: ${theme('preview.articleBg')};
  width: 100%;
  padding: 8px 32px;
`
export const MoreWrapper = styled.div`
  ${cs.flex()};
  cursor: pointer;
`
export const MoreIcon = styled(Img)`
  fill: #6a868a;
  width: 15px;
  height: 15px;
`
export const LablerWrapper = styled.div``

export const RefinedLabel = styled.div`
  ${cs.flex('align-center')};
  color: tomato;
  border: 1px dashed;
  border-color: ${theme('baseColor.error')}
  padding: 0 5px;
  border-radius: 5px;
  margin-top: -2px;
`
export const RefinedIcon = styled(Img)`
  fill: ${theme('baseColor.error')};
  width: 15px;
  height: 15px;
  margin-right: 5px;
  margin-top: -2px;
  display: block;
`
export const RefinedText = styled.div``
