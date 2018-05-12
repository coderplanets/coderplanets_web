import styled from 'styled-components'
import ReactSVG from 'react-svg'
import { Input } from '../../../components'
import { theme } from '../../../utils'

export const EditorBlock = styled.div`
  display: ${props => (props.name === props.curView ? 'block' : 'none')};
`
export const PreviewBlock = styled.div`
  display: ${props => (props.name === props.curView ? 'block' : 'none')};
`

export const TitleInput = styled(Input)`
  border-color: ${theme('preview.editor_border')};
  border-bottom: 1px solid;
  border-bottom-color: ${theme('preview.editor_border_normal')};

  text-align: center;
  height: 45px;
  font-size: 1.6em;
  color: ${theme('preview.editor_title')};
  background: ${theme('preview.editor_header_bg')};
  align-self: center;
  width: 85%;
  &:hover {
    border-color: ${theme('preview.editor_border')};
    border-bottom: 1px solid;
    border-bottom-color: ${theme('preview.editor_border_active')};
  }
  &:focus {
    border-color: ${theme('preview.editor_border')};
    box-shadow: none;
    border-bottom: 1px solid;
    border-bottom-color: ${theme('preview.editor_border_active')};
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

export const UsageText = styled.div`
  color: #618c92;
  font-size: 1.3em;
  flex-grow: 1;
`
export const MarkdownIcon = styled(ReactSVG)`
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
  color: #b5cfd0;
  &:hover {
    color: #618c92;
    cursor: pointer;
  }
  transition: color 0.3s;
`

// this is from top
export const BackToEditHint = styled.div`
  display: flex;
  color: #618c92;
  cursor: pointer;
`

export const BodyWrapper = styled.div`
  padding: 20px;
  background-color: ${theme('preview.editor_container_bg')};
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
  display: flex;
  cursor: pointer;
`

export const ReprintIcon = styled(ReactSVG)`
  fill: #61abb1;
  width: 14px;
  height: 14px;
  margin-top: 3px;
  margin-right: 5px;
`

export const MoreIcon = styled(ReactSVG)`
  width: 14px;
  height: 14px;
  margin-top: 3px;
  fill: #61abb1;
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
  border: 1px solid #f9fcfc;
  height: 20px;
  line-height: 20px;
  width: 50%;
  font-size: 0.9em;
  margin-top: -1px;
  color: #5b8c91;
  background: #f9fcfc;
  padding-left: 2px;
  color: #a7b7ac;
  text-align: center;
  &:hover {
    border-color: #f9fcfc;
    border-bottom: 1px solid #b3cacb;
    color: #61abb1;
  }
  &:focus {
    border-color: #f9fcfc;
    box-shadow: none;
    border-bottom: 1px solid #b3cacb;
    color: #61abb1;
    text-align: left;
  }
`
export const LinkLabel = styled.div`
  font-size: 0.9em;
  color: #a7b7ac;
  ${SourceLink}:hover & {
    color: #61abb1;
  }
  transition: color 0.3s;
`

export const PreviewBtn = styled.div`
  margin-top: -3px;
`
export const Selector = styled.div`
  display: flex;
  &:hover {
    cursor: pointer;
    color: #6bb7bd;
  }
`
export const CheckIcon = styled(ReactSVG)`
  fill: #6bb7bd;
  width: 18px;
  height: 18px;
  margin-top: 2px;
  margin-right: 3px;
  visibility: ${props =>
    props.active === props.value ? 'visiable' : 'hidden'};
`
export const CheckText = styled.div``
