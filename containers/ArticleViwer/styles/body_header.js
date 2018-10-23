import styled from 'styled-components'

import Img from '../../../components/Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const LinkSource = styled.div`
  &:hover {
    color: ${theme('article.linkHover')};
    cursor: pointer;
  }
`
export const MoreWrapper = styled.div`
  display: flex;
  cursor: pointer;
`
export const MoreIcon = styled(Img)`
  fill: #6a868a;
  width: 15px;
  height: 15px;
`
export const LinkFrom = styled.a`
  display: flex;
  color: ${theme('article.link')};
  margin-left: 5%;
  &:hover {
    cursor: pointer;
    color: ${theme('thread.extraInfo')};
    text-decoration: underline;
  }
`
export const RefinedLabel = styled.div`
  display: flex;
  align-items: center;
  color: tomato;
  border: 1px dashed tomato;
  padding: 0 5px;
  margin-right: 10px;
  border-radius: 5px;
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
