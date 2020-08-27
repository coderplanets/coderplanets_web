import styled from 'styled-components'

import { theme } from '@/utils'

import { BaseBar } from './index'

export const PrefixWrapper = styled.div`
  margin-left: 15px;
  width: 25px;
`

export const EditorBar = styled(BaseBar)`
  position: relative;
  height: 58px;
`
export const InputBar = styled.input.attrs((props) => ({
  'data-testid': props.testId,
}))`
  caret-color: ${theme('shell.searchInput')};
  flex-grow: 1;
  font-family: '.SFNSText-Light', 'SF UI Text', 'Helvetica Neue', 'Arial',
    'Lucida Grande', 'Segoe UI', Noto Sans, sans-serif;
  width: auto;
  outline: none;
  font-weight: 200;
  color: ${theme('shell.searchInput')};
  font-size: 1.4rem;
  background-color: transparent;
  padding: 0 20px 0px 20px;
  border: 0;
  border-radius: 0;
  transition: all 400ms ease;

  ::placeholder {
    color: ${theme('shell.searchInput')};
    opacity: 0.5;
  }
`
