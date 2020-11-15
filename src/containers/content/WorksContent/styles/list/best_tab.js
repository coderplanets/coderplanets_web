import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  width: 200px;
  margin-top: 5px;
  margin-left: 16px;
`
export const ItemWrapper = styled.div`
  ${css.flex('align-both')};
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#033844' : 'transparent')};
  margin-right: 10px;
  border-radius: 10px;
  padding: ${({ active }) => (active ? '3px 12px' : '3px 8px')};
`
export const Icon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  display: ${({ active }) => (active ? 'block' : 'none')};
  ${css.size(14)};
  margin-right: 5px;
  margin-bottom: 1px;
`
export const Text = styled.div`
  opacity: ${({ active }) => (active ? 1 : 0.6)};
  color: ${({ active }) =>
    active ? theme('thread.articleTitle') : theme('thread.articleDigest')};
  font-size: 13px;

  ${ItemWrapper}:hover & {
    color: ${theme('thread.articleTitle')};
  }

  transition: all 0.2s;
`
