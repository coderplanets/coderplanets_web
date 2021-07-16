import styled from 'styled-components'

import type { TActive } from '@/spec'
import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('align-center', 'justify-between')};
  width: 100%;
  height: 60px;
  border-bottom: 1px solid;
  border-bottom-color: ${theme('drawer.divider')};
  position: relative;
`
export const TabWrapper = styled.div`
  ${css.flex('align-center')};
  position: absolute;
  left: 0;
  bottom: -1px;
`
export const Tab = styled.div<TActive>`
  ${css.flex('align-center')};
  color: ${({ $active }) =>
    $active ? theme('thread.articleTitle') : theme('thread.articleDigest')};
  font-size: 15px;
  padding-bottom: 15px;
  border-bottom: 2px solid;
  border-bottom-color: ${({ $active }) =>
    $active ? theme('thread.articleTitle') : 'transparent'};

  &:hover {
    fill: ${theme('thread.articleTitle')};
  }
`

export const TabIcon = styled(Img)`
  ${css.size(13)};
  fill: ${theme('thread.articleDigest')};
  margin-left: 4px;

  ${Tab}:hover & {
    fill: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
`
export const UpvoteWrapper = styled.div``
