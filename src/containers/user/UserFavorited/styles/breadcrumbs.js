import styled from 'styled-components'

import Img from '@Img'
import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
  margin-top: 10px;
`
export const TitleList = styled.div`
  ${cs.flex()};
  color: ${theme('tabs.headerActive')};
`
export const Label = styled.div`
  ${cs.flex('align-center')};
  margin-left: 3px;
`
export const ThreadSelectorLabel = styled(Label)`
  flex-grow: 1;
`

export const LabelText = styled.div`
  &:hover {
    color: ${theme('banner.title')};
    cursor: pointer;
    text-decoration: underline;
  }
  transition: color 0.3s;
`
export const LabelIcon = styled(Img)`
  fill: ${theme('tabs.headerActive')};
  width: 18px;
  height: 18px;
  display: block;
  margin-right: 4px;
`

export const LabelSlash = styled.div`
  margin-left: 5px;
  margin-right: 5px;
`

export const Divider = styled.div`
  border-bottom: 1px solid;
  border-color: ${theme('banner.desc')};
  margin-top: 10px;
  margin-bottom: 15px;
  width: 100%;
  opacity: 0.3;
`
