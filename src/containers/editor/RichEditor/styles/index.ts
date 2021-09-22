import styled, { createGlobalStyle } from 'styled-components'

import css from '@/utils/css'
import { theme } from '@/utils/themes'

export const Wrapper = styled.div`
  ${css.flexColumn('align-center')};
  position: relative;
  width: 100%;
  /* height: 100%; */
`
export const InnerWrapper = styled.div`
  width: 680px;
`
export const EditorWrapper = styled.div.attrs(() => ({
  spellCheck: false,
}))`
  color: ${theme('thread.articleTitle')};
  min-height: 390px;
  //
  // media therdhold is 651
  width: 100%;
  padding-bottom: 32px;
  padding-left: 10px;
  padding-right: 0;
  /* background: #052630; */
`
