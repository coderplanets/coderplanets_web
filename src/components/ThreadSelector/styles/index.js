import styled from 'styled-components'

import { theme, cs } from '@utils'
import Img from '@Img'

export const Wrapper = styled.div`
  ${cs.flexGrow('align-center')};
`
export const Label = styled.div`
  ${cs.flex('align-center')};
  cursor: pointer;
`
export const BoxedLabel = styled(Label)`
  ${cs.flex('align-center')};
  cursor: pointer;
  border: 1px solid;
  padding: 0 10px;
  border-radius: 5px;
  border-color: ${theme('button.primary')};
`
export const LabelIcon = styled(Img)`
  width: 18px;
  height: 18px;
  fill: ${theme('banner.title')};
  display: block;
  &:hover {
    fill: ${theme('tabs.headerActive')};
  }
`
export const LabelText = styled.div`
  color: ${theme('tabs.headerActive')};
  font-size: 0.9rem;
`
export const LabelCount = styled.div`
  color: ${theme('banner.desc')};
  font-size: 0.8rem;
  flex-grow: 1;
  text-align: right;
`
