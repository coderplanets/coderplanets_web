import styled from 'styled-components'

import type { TActive } from '@/spec'
import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  width: 100%;

  margin-top: 6px;
  margin-bottom: 12px;
`
export const ItemWrapper = styled.div<TActive>`
  ${css.flex('align-both')};
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#03404e' : 'transparent')};
  margin-right: 8px;
  border-radius: 10px;
  padding: ${({ active }) => (active ? '2px 16px' : '2px 8px')};
`
export const Icon = styled(Img)<TActive>`
  fill: ${theme('thread.articleTitle')};
  display: ${({ active }) => (active ? 'block' : 'none')};
  ${css.size(14)};
  margin-right: 12px;
  margin-bottom: 1px;
`
export const Text = styled.div<TActive>`
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  opacity: 1;
  color: ${({ active }) =>
    active ? theme('thread.articleTitle') : theme('thread.articleDigest')};
  font-size: 13px;

  ${ItemWrapper}:hover & {
    color: ${theme('thread.articleTitle')};
  }

  transition: all 0.2s;
`
