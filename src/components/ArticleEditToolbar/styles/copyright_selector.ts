import styled from 'styled-components'

import type { TActive } from '@/spec'
import { theme } from '@/utils/themes'
import css from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div`
  padding-left: 5px;
`
export const Selector = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 5px;
  &:hover {
    cursor: pointer;
    color: ${theme('editor.title')};
  }
`
export const CheckIcon = styled(Img)<TActive>`
  fill: ${theme('editor.content')};
  ${css.size(18)};
  margin-top: 2px;
  margin-left: 3px;
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
`
export const CheckText = styled.div`
  color: ${theme('editor.content')};
`
export const CopyRightText = styled.div`
  font-size: 13px;
`
export const ReprintWrapper = styled.div`
  ${css.flex('align-center')};
  color: ${theme('editor.content')};
  cursor: pointer;
`
export const ReprintIcon = styled(Img)`
  fill: ${theme('editor.content')};
  ${css.size(13)};
  margin-right: 5px;
`
export const MoreIcon = styled(Img)`
  ${css.size(13)};
  margin-left: 3px;
  fill: ${theme('editor.placeholder')};
  &:hover {
    cursor: pointer;
  }

  transform: rotate(90deg);
`
