import styled, { createGlobalStyle } from 'styled-components'

import css from '@/utils/css'
import { theme } from '@/utils/themes'

export const Wrapper = styled.div`
  ${css.flexColumn('align-center')};
  position: relative;
  /* border: 1px solid tomato; */

  //${theme('bodyBg')};
  width: 100%;
  min-width: 650px;
  /* padding: 10px 40px; */
`
export const EditorWrapper = styled.div.attrs(() => ({
  spellCheck: false,
}))`
  color: ${theme('thread.articleTitle')};
  margin-top: 150px;
  min-height: 500px;
  //
  // media therdhold is 651
  width: 720px;
  border: 1px solid;
  border-color: #024b5f;
  /* border-color: tomato; */
  padding-top: 30px;
  padding-bottom: 32px;
  padding-left: 45px;
  padding-right: 40px;
  background: #052630;
  border-radius: 18px;
`

export const GlobalStyle = createGlobalStyle`

`
