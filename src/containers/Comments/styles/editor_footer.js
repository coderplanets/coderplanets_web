import styled from 'styled-components'

import Img from '@components/Img'
import { theme, cs } from '@utils'

export const InputFooter = styled.div`
  ${cs.flex()};
  padding: 0 10px;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-right: 15px;
`

export const InputHelper = styled.div`
  ${cs.flexGrow()};
`

export const FoldBtn = styled.div`
  ${cs.flex('align-center')};
`
export const FoldArrow = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 16px;
  height: 16px;
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
  width: 20px;
  height: 20px;
  margin-right: 8px;

  &:hover {
    fill: #51abb2;
    cursor: pointer;
  }
`

export const InputSubmit = styled.div`
  ${cs.flex('align-center')};
`
