import styled from 'styled-components'
import ReactSVG from 'react-svg'
import { Input, Mention } from 'antd'

export const EditorBlock = styled.div`
  display: ${props => (props.name === props.curView ? 'block' : 'none')};
`
export const PreviewBlock = styled.div`
  display: ${props => (props.name === props.curView ? 'block' : 'none')};
`

export const TitleInput = styled(Input)`
  border: 1px solid #f9fcfc;
  border-bottom: 1px solid #e2eaea;

  text-align: center;
  height: 45px;
  font-size: 1.6em;
  color: #5b8c91;
  background: #f9fcfc;
  align-self: center;
  width: 85%;
  &:hover {
    border-color: #f9fcfc;
    border-bottom: 1px solid #b3cacb;
  }
  &:focus {
    border-color: #f9fcfc;
    box-shadow: none;
    border-bottom: 1px solid #b3cacb;
  }
`

export const BodyInput = styled(Mention)`
  border: 1px solid #f9fcfc;
  &:hover {
    border-color: #f9fcfc;
    border-bottom: 1px solid #b3cacb;
  }
  &:focus {
    border-color: #f9fcfc;
    box-shadow: none;
    border-bottom: 1px solid #b3cacb;
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
  fill: #6bb7bd;
  width: 20px;
  height: 18px;
  margin-right: 5px;

  ${MarkDownHint}:hover & {
    fill: #618c92;
  }
`
export const MarkDownHint = styled.div`
  display: flex;
  color: lightgrey;
  &:hover {
    color: #618c92;
    cursor: pointer;
  }
  transition: color 0.3s;
`

export const BackToEditBtn = styled.div``
// this is from top
export const BackToEditHint = styled.div`
  display: flex;
  color: #618c92;
  cursor: pointer;
`

export const BodyWrapper = styled.div`
  padding: 20px;
  background: #f9fcfc;
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

export const ReprintIcon = styled(ReactSVG)`
  width: 14px;
  height: 14px;
  margin-top: 3px;
  fill: #61abb1;
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

export const Footer = styled.div`
  display: flex;
  color: #a5c8ca;
  margin-top: 10px;
  margin-left: 35px;
  margin-right: 40px;
`

export const RespectText = styled.div`
  flex-grow: 1;
  margin-top: 5px;
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

// TODO: move to a component
export const PopoverDIY = styled.div`
  margin: -16px;
  border-radius: 4px;
  padding: 5px;
  padding-right: 8px;
  background: #f9fcfc;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  position: relative;
`
export const PopoverPointer = styled.div`
  background: #f9fcfc;
  width: 7.07106781px;
  height: 7.07106781px;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  position: absolute;
  display: block;
  border-color: transparent;
  border-style: solid;
  top: 50%;
  left: -4px;
  box-shadow: -1px 2px 4px 0px rgba(86, 86, 86, 0.15);
  -webkit-transform: translateY(-50%) rotate(45deg);
  -ms-transform: translateY(-50%) rotate(45deg);
  transform: translateY(-50%) rotate(45deg);
`
