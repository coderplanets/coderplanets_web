import styled from 'styled-components'
import Input from '@/components/Input'

import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flexColumn()};
  width: 100%;
  min-height: 90px;
`
export const Divider = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  background: #003b49;
  margin-top: 18px;
  margin-bottom: 20px;
`
export const TitleInput = styled(Input)`
  margin-top: 15px;
  border: none !important;
  padding-left: 2px;
  padding-top: 2px;

  text-align: left;
  min-height: 28px;
  font-size: 25px;
  color: ${theme('thread.articleTitle')};
  /* background: ${theme('editor.headerBg')}; */
  background: transparent;
  width: 100%;

  &:hover { 
    border: none;
  } 
  &:focus { 
    border: none;
    box-shadow: none;
  }
  &:active { 
    border: none;
    box-shadow: none;
  }
`
