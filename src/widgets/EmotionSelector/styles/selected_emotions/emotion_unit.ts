import styled from 'styled-components'

import type { TActive } from '@/spec'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div<TActive>`
  ${css.flex('align-center')};
  cursor: pointer;
  margin-right: 14px;
  margin-right: 5px;
  padding: 2px 5px;
  border-radius: 5px;
  margin-left: -1px;
  background: ${({ $active }) => ($active ? '#00333D' : 'transparent')};

  &:hover {
    background: ${theme('textBadge')}; // to-theme
  }
`

export const Count = styled.div`
  color: ${theme('thread.extraInfo')};
  ${Wrapper}:hover & {
    color: #00a59b;
  }
`
