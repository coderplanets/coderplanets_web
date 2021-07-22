import styled from 'styled-components'

import type { TActive } from '@/spec'
import { css, theme } from '@/utils'

import Input from '@/components/Input'

export const TabWrapper = styled.div`
  ${css.flex('align-end')};
`
export const TabName = styled.div<TActive>`
  font-size: ${({ $active }) => ($active ? '15px' : '14px')};
  color: ${({ $active }) =>
    $active ? theme('thread.articleTitle') : theme('thread.articleDigest')};
  margin-right: 12px;

  &:hover {
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }

  transition: color 0.2s;
`
export const BoxWrapper = styled.div`
  ${css.flex('align-center')};
  margin-top: 8px;
  margin-left: -8px;
`
export const Inputer = styled(Input)``

export const CopyBtn = styled.div`
  ${css.flex('align-both')};
  width: 40px;
  height: 40px;
`
