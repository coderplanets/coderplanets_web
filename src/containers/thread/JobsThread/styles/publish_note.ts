import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn('align-both')};
  color: ${theme('thread.articleTitle')};
  margin-top: 60px;
`
export const NoteIcon = styled(Img)`
  ${css.size(80)};
  margin-bottom: 30px;
`
export const NoteDesc = styled.div`
  width: 60%;
`
export const Linker = styled.a`
  color: ${theme('banner.title')};
  margin-left: 3px;
  margin-right: 3px;
  text-decoration: underline;
  &:hover {
    text-decoration: underline;
    color: ${theme('banner.title')};
    font-weight: bold;
  }
`
