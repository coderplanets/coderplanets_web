import styled from 'styled-components'

import Img from '../../../components/Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  margin-left: 35px;
  margin-right: 35px;
  padding-top: 15px;
  margin-bottom: 10px;
`

export const UsageText = styled.div`
  color: ${theme('editor.content')};
  font-size: 1.3em;
  flex-grow: 1;
`
export const MarkdownIcon = styled(Img)`
  fill: #51abb2;
  width: 20px;
  height: 18px;
  margin-right: 5px;

  ${MarkDownHint}:hover & {
    fill: #618c92;
  }
`
export const MarkDownHint = styled.div`
  display: flex;
  color: ${theme('editor.placeholder')};
  &:hover {
    color: ${theme('editor.content')};
    cursor: pointer;
  }
  transition: color 0.3s;
`
export const BackToEditHint = styled.div`
  display: flex;
  color: ${theme('editor.title')};
  cursor: pointer;
`
