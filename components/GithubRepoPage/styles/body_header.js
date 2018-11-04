import styled from 'styled-components'

import Img from '../../Img'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flex('justify-between')};
  align-items: flex-start;

  width: 100%;
  margin-bottom: 15px;
  border-bottom: 1px solid;
  border-bottom-color: ${theme('preview.divider')};
  padding-bottom: 5px;
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
  border: 1px dashed tomato;
  padding: 0 5px;
  border-radius: 5px;
  margin-top: -2px;
`
export const RefinedIcon = styled(Img)`
  fill: tomato;
  width: 15px;
  height: 15px;
  margin-right: 5px;
  margin-top: -2px;
  display: block;
`
export const RefinedText = styled.div``
