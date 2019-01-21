import styled from 'styled-components'

import { Input } from 'antd'
// import Img from 'Img'
import { cs, theme } from 'utils'

export const Wrapper = styled.div`
  ${cs.flex('justify-between')};
`

export const CopyRightWrapper = styled.div`
  ${cs.flex()};
`
export const PreviewBtn = styled.div`
  margin-top: -3px;
`

export const SourceLink = styled.div`
  ${cs.flex('justify-center')};
  width: 60%;
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
