import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  margin-top: 10px;
`
export const TitleList = styled.div`
  ${css.flex()};
  color: ${theme('tabs.headerActive')};
`
export const Label = styled.div`
  ${css.flex('align-center')};
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
  ${css.size(18)};
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
