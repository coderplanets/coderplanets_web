import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import CommentSVG from '@/icons/Comment'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.extraInfo')};
  font-size: 13px;
  font-weight: 500;
`
export const HighlightWrapper = styled(Wrapper)`
  background: ${theme('heightGradient')};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
export const CommentsIcon = styled(CommentSVG)<{ highlight?: boolean }>`
  fill: ${({ highlight }) =>
    highlight ? theme('heightIcon') : theme('thread.extraInfo')};
  ${css.size(10)};
  margin-right: 6px;
`
