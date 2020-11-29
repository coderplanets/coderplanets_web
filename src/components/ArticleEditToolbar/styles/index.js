import styled from 'styled-components'

import Input from '@/components/Input'

// import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  width: 100%;
`
export const CopyRightWrapper = styled.div`
  ${css.flex()};
`
export const SourceLink = styled.div`
  ${css.flex('align-center')};
  width: 400px;
  margin-left: 16px;
`
export const LinkInput = styled(Input)`
  height: 20px;
  line-height: 20px;
  width: 300px;
  font-size: 12px;
  margin-top: -1px;
  background: transparent;
  padding-left: 2px;
  border-radius: 0;
  color: ${theme('editor.title')};
  border: none;
  border-bottom: 1px solid transparent;

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
  font-size: 12px;
  width: 60px;
  margin-top: 2px;
  color: ${theme('editor.placeholder')};
  ${SourceLink}:hover & {
    color: ${theme('editor.title')};
  }
  transition: color 0.2s;
`
