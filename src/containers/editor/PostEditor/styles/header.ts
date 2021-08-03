import styled from 'styled-components'

import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex()};
  margin-left: 35px;
  margin-right: 35px;
  padding-top: 15px;
  margin-bottom: 10px;
`

export const UsageText = styled.div`
  ${css.flexGrow('align-center')};
  color: ${theme('editor.content')};
  font-size: 1.3em;
`

export const AtSignIcon = styled(Img)`
  fill: ${theme('editor.content')};
  ${css.size(15)};
  margin-left: 5px;
  margin-right: 3px;
`

export const RefUsersWrapper = styled.div`
  ${css.flex('align-center')};
`
export const RefUserList = styled.div`
  margin-top: -10px;
`
export const MarkDownHint = styled.div`
  ${css.flex()};
  color: ${theme('editor.placeholder')};
  &:hover {
    color: ${theme('editor.content')};
    cursor: pointer;
  }
  transition: color 0.3s;
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
export const BackToEditHint = styled.div`
  ${css.flex()};
  color: ${theme('editor.title')};
  cursor: pointer;
`
