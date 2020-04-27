import styled from 'styled-components'
import { Input } from 'antd'

import Img from '@Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  position: relative;
  ${cs.flex('align-center')}
  width: 85%;
  margin-bottom: 18px;
`
export const SearchInput = styled(Input)`
  width: 100%;
  border-color: ${theme('editor.border')};
  padding-left: 8px;
  ::placeholder {
    color: #4a6d77;
  }

  height: 26px;
  font-size: 13px;
  color: ${theme('editor.title')};
  background: ${theme('editor.headerBg')};
  align-self: center;
  &:hover {
    border-color: ${theme('editor.border')};
    border: 1px solid;
    border-color: ${theme('editor.borderNormal')};
  }
  &:focus {
    border-color: ${theme('editor.border')};
    box-shadow: none;
    border: 1px solid;
    border-color: ${theme('editor.borderNormal')};
  }
`
export const SearchIcon = styled(Img)`
  fill: #4a6d77;
  position: absolute;
  right: 6px;
  top: 7px;
  width: 12px;
  height: 12px;
  display: block;
`
