import styled from 'styled-components'
import { Input } from 'antd'

import Img from 'components/Img'
import { cs, theme } from 'utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
`
export const SearchInput = styled(Input)`
  width: 30%;
  border-color: ${theme('editor.border')};
  border-bottom: 1px solid;
  border-bottom-color: ${theme('editor.borderNormal')};
  ::placeholder {
    color: ${theme('editor.placeholder')};
  }

  height: 30px;
  font-size: 1.1rem;
  color: ${theme('editor.title')};
  background: ${theme('editor.headerBg')};
  align-self: center;
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
export const SearchIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 18px;
  height: 18px;
  display: block;
  margin-left: 8px;
  &:hover {
    fill: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
`
