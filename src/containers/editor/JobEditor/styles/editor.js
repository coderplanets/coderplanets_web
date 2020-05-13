import styled from 'styled-components'

import { theme, cs } from '@/utils'
import Input from '@/components/Input'

export const Wrapper = styled.div`
  ${cs.flexColumn()};

  padding: 20px;
  background-color: ${theme('editor.contentBg')};
  min-height: 400px;
  margin-top: 5px;
  margin-left: 4%;
  margin-right: 4%;
  border-radius: 5px;
`
export const TitleInput = styled(Input)`
  border-color: ${theme('editor.border')};
  border-bottom: 1px solid;
  border-bottom-color: ${theme('editor.borderNormal')};

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
export const FooterWrapper = styled.div`
  ${cs.flex('justify-center')};
  margin-top: 25px;
`
