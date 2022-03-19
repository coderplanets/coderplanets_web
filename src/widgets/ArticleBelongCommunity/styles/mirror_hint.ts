import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import ArticleMirrorSVG from '@/icons/ArticleMirror'

export const MirrorIcon = styled(ArticleMirrorSVG)`
  ${css.size(20)};
  fill: ${theme('thread.articleDigest')};
  position: absolute;
  top: -14px;
  right: -35px;

  opacity: 0.8;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  transition: opacity 0.2s;
`
export const PopHint = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
  margin-top: 6px;
  margin-bottom: 15px;
`
export const SlashSign = styled.div`
  font-size: 11px;
  font-weight: bolder;
  font-family: monospace;
  opacity: 0.8;
  margin-right: 6px;
`
export const MirrorCard = styled.div`
  border-bottom: 1px solid;
  border-bottom-color: ${theme('popover.borderColor')};
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }
`
