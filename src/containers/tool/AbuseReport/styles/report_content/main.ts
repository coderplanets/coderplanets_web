import styled from 'styled-components'

import type { TActive } from '@/spec'
import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn()};
`
export const Option = styled.div`
  ${css.flex('align-center')};
  font-size: 16px;
  padding: 12px 0;
  border-bottom: 1px solid;
  border-bottom-color: #114b5f;

  :last-child {
    border-bottom: none;
  }
`
export const SelectWrapper = styled.div`
  ${css.flex('align-center')};
`
export const Title = styled.div<TActive>`
  color: ${theme('thread.articleTitle')};
  margin-left: 5px;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  opacity: ${({ active }) => (active ? 1 : 0.9)};

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`
