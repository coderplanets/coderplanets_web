import styled from 'styled-components'

import Img from '../../../components/Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`
export const TitleList = styled.div`
  color: ${theme('tabs.headerActive')};
  display: flex;
`
export const Label = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3px;
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
  width: 95%;
  opacity: 0.3;
`
