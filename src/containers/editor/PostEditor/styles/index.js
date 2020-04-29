import styled from 'styled-components'

import Input from '@components/Input'
import { theme, cs } from '@utils'

export const ViewerWrapper = styled.div`
  display: ${({ active }) => (active ? 'block' : 'none')};
`

export const Wrapper = styled.div``

export const Header = styled.div`
  ${cs.flex()};
  margin-left: 35px;
  margin-right: 35px;
  padding-top: 15px;
  margin-bottom: 10px;
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

  &:hover {
    color: ${theme('editor.title')};
    border-color: ${theme('editor.headerBg')};
    border-bottom: 1px solid;
    border-bottom-color: ${theme('editor.border')};
  }
  &:focus {
    color: ${theme('editor.title')};
    border-color: ${theme('editor.headerBg')};
    box-shadow: none;
    border-bottom: 1px solid;
    border-bottom-color: ${theme('editor.placeholder')};
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
