import styled from 'styled-components'

import { Input, Img } from '../../../components'
import { theme } from '../../../utils'

export const EditorBlock = styled.div`
  display: ${({ name, curView }) => (name === curView ? 'block' : 'none')};
`
export const PreviewBlock = styled.div`
  display: ${({ name, curView }) => (name === curView ? 'block' : 'none')};
`

export const TitleInput = styled(Input)`
  border-color: ${theme('editor.border')};
  border-bottom: 1px solid;
  border-bottom-color: ${theme('editor.borderNormal')};
  ::placeholder {
    color: ${theme('editor.placeholder')};
  }

  text-align: center;
  height: 45px;
  font-size: 1.6em;
  color: ${theme('editor.title')};
  background: ${theme('editor.headerBg')};
  align-self: center;
  width: 85%;
  &:hover {
    border-color: ${theme('editor.border')};
    border-bottom: 1px solid;
    border-bottom-color: ${theme('editor.borderActive')};
  }
  &:focus {
    border-color: ${theme('editor.border')};
    box-shadow: none;
    border-bottom: 1px solid;
    border-bottom-color: ${theme('editor.borderActive')};
  }
`

export const Wrapper = styled.div``

export const Header = styled.div`
  display: flex;
  margin-left: 35px;
  margin-right: 35px;
  padding-top: 15px;
  margin-bottom: 10px;
`
export const BodyWrapper = styled.div`
  padding: 20px;
  background-color: ${theme('editor.contentBg')};
  min-height: 600px;
  margin-top: 5px;
  margin-left: 4%;
  margin-right: 4%;
  border-radius: 5px;
  flex-direction: column;
  display: flex;
`

export const BodyHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CopyRightCheck = styled.div`
  display: flex;
`
export const CopyRightText = styled.div`
  font-size: 1.1em;
`

export const ReprintWrapper = styled.div`
  color: ${theme('editor.content')};
  display: flex;
  cursor: pointer;
`

export const ReprintIcon = styled(Img)`
  fill: ${theme('editor.content')};
  width: 14px;
  height: 14px;
  margin-top: 3px;
  margin-right: 5px;
`

export const MoreIcon = styled(Img)`
  width: 14px;
  height: 14px;
  margin-top: 3px;
  fill: ${theme('editor.placeholder')};
  &:hover {
    cursor: pointer;
  }
`

export const SourceLink = styled.div`
  display: flex;
  width: 60%;
  justify-content: center;
`
export const LinkInput = styled(Input)`
  border: 1px solid;
  border-color: ${theme('editor.border')};
  height: 20px;
  line-height: 20px;
  width: 50%;
  font-size: 0.9em;
  margin-top: -1px;
  background: ${theme('editor.headerBg')};
  padding-left: 2px;
  color: ${theme('editor.title')};

  ::placeholder {
    color: ${theme('editor.placeholder')};
  }

  text-align: left;
  &:hover {
    border-color: ${theme('editor.headerBg')};
    border-bottom: 1px solid;
    border-bottom-color: ${theme('editor.border')};
    color: ${theme('editor.title')};
  }
  &:focus {
    border-color: ${theme('editor.headerBg')};
    box-shadow: none;
    border-bottom: 1px solid;
    border-bottom-color: ${theme('editor.placeholder')};
    color: ${theme('editor.title')};
    text-align: left;
  }
`
export const LinkLabel = styled.div`
  font-size: 0.9em;
  color: ${theme('editor.placeholder')};
  ${SourceLink}:hover & {
    color: ${theme('editor.title')};
  }
  transition: color 0.3s;
`

export const PreviewBtn = styled.div`
  margin-top: -3px;
`

export const SelectorWrapper = styled.div`
  padding: 5px 8px;
`

export const Selector = styled.div`
  display: flex;
  &:hover {
    cursor: pointer;
    color: ${theme('editor.title')};
  }
`
export const CheckIcon = styled(Img)`
  fill: ${theme('editor.content')};
  width: 18px;
  height: 18px;
  margin-top: 2px;
  margin-right: 3px;
  visibility: ${({ active, value }) =>
    active === value ? 'visiable' : 'hidden'};
`
export const CheckText = styled.div`
  color: ${theme('editor.content')};
`
