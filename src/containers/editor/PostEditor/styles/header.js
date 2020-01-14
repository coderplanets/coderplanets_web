import styled from 'styled-components'

import Img from '@components/Img'
import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flex()};
  margin-left: 35px;
  margin-right: 35px;
  padding-top: 15px;
  margin-bottom: 10px;
`

export const UsageText = styled.div`
  ${cs.flexGrow('align-center')};
  color: ${theme('editor.content')};
  font-size: 1.3em;
`

export const AtSignIcon = styled(Img)`
  fill: ${theme('editor.content')};
  width: 15px;
  height: 15px;
  display: block;
  margin-left: 5px;
  margin-right: 3px;
`

export const RefUsersWrapper = styled.div`
  ${cs.flex('align-center')};
`
export const RefUserList = styled.div`
  margin-top: -10px;
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
  ${cs.flex()};
  color: ${theme('editor.placeholder')};
  &:hover {
    color: ${theme('editor.content')};
    cursor: pointer;
  }
  transition: color 0.3s;
`
export const BackToEditHint = styled.div`
  ${cs.flex()};
  color: ${theme('editor.title')};
  cursor: pointer;
`
