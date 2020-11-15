import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

export const InputFooter = styled.div`
  ${css.flex()};
  padding: 0 10px;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-right: 15px;
`

export const InputHelper = styled.div`
  ${css.flexGrow()};
`

export const FoldBtn = styled.div`
  ${css.flex('align-center')};
`
export const FoldArrow = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(16)};
  display: block;
  margin-right: 3px;
  ${FoldBtn}:hover & {
    cursor: pointer;
    fill: ${theme('thread.articleTitle')};
  }
`

export const FoldText = styled.div`
  color: ${theme('thread.articleDigest')};
  ${FoldBtn}:hover & {
    cursor: pointer;
    color: ${theme('thread.articleTitle')};
  }
`

export const HelperIcon = styled(Img)`
  fill: ${theme('comment.placeholder')};
  ${css.size(20)};
  margin-right: 8px;

  &:hover {
    fill: #51abb2;
    cursor: pointer;
  }
`

export const InputSubmit = styled.div`
  ${css.flex('align-center')};
`
