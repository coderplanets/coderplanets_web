import styled from 'styled-components'

import Img from '../../../components/Img'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
`
export const InputWrapper = styled.div`
  ${cs.flex('align-center')};
  border-radius: 6px;
  padding: 10px 18px;
  background-color: #f2f5f4;
  margin-bottom: 8px;
`
export const SearchIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  width: 15px;
  height: 15px;
  margin-right: 10px;
  display: block;
`
export const InputBar = styled.input`
  caret-color: ${theme('banner.title')};
  flex-grow: 1;
  font-family: '.SFNSText-Light', 'SF UI Text', 'Helvetica Neue', 'Arial',
    'Lucida Grande', 'Segoe UI', Noto Sans, sans-serif;
  height: 100%;
  width: auto;
  min-width: 420px;
  outline: none;
  color: ${theme('banner.desc')};
  font-size: 1.1rem;
  max-height: none;
  background-color: transparent;
  border: 0;
  border-radius: 0;
  transition: all 400ms ease;
  ::placeholder {
    color: ${theme('banner.desc')};
    opacity: 0.6;
  }
`
