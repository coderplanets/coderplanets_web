import styled from 'styled-components'

import css from '@/utils/css'
import { theme } from '@/utils/themes'

import { getWidth, getMinHeight } from './metric'

export const Wrapper = styled.div`
  ${css.flexColumn('align-center')};
  position: relative;
  width: 100%;
  /* height: 100%; */
`
export const InnerWrapper = styled.div<{ type: string }>`
  width: ${({ type }) => getWidth(type)};
`
const EditWrapperBase = styled.div<{ type: string }>``
export const EditorWrapper = styled(EditWrapperBase).attrs(() => ({
  spellCheck: false,
}))`
  color: ${theme('thread.articleTitle')};
  min-height: ${({ type }) => getMinHeight(type)};
  //
  // media therdhold is 651
  width: 100%;
  padding-bottom: 32px;
  padding-left: 10px;
  padding-right: 0;
  /* background: #052630; */
`
