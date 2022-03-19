import styled from 'styled-components'

import CommentSVG from '@/icons/Comment'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center', 'justify-end')};
  color: ${theme('thread.articleDigest')};
`
export const Row = styled.div`
  ${css.flex('align-center')};
  cursor: pointer;
`
export const CommentIcon = styled(CommentSVG)`
  ${css.size(16)};
  fill: ${theme('thread.articleDigest')};
  opacity: 0.8;
  margin-top: 1px;
`
export const Count = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 15px;
  margin-left: 5px;
`
