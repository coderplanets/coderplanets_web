import styled from 'styled-components'

import type { TSizeSM } from '@/spec'
import { SIZE } from '@/constant'

import css, { theme } from '@/utils/css'

import CommentSVG from '@/icons/Comment'

export const Wrapper = styled.div<{ size: TSizeSM }>`
  ${css.flex('align-center')};
  color: ${theme('thread.extraInfo')};
  font-size: ${({ size }) => (size === SIZE.MEDIUM ? '14px' : '13px')};
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
