import styled from 'styled-components'

import Input from '@components/Input'

import Img from '@Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center')}
  position: relative;
  width: 85%;
  margin-bottom: 18px;
`
export const SearchInput = styled(Input)`
  width: 100%;
  padding-left: 8px;
  height: 30px;
  font-size: 13px;
  ::placeholder {
    color: ${theme('form.text')};
    opacity: 0.6;
  }
`
export const SearchIcon = styled(Img)`
  fill: #4a6d77;
  position: absolute;
  right: 6px;
  top: 9px;
  width: 12px;
  height: 12px;
  display: block;
`
