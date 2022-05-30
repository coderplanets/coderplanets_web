import styled from 'styled-components'

import type { TActive } from '@/spec'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div<TActive>`
  ${css.flex('align-center')};
  cursor: pointer;
  margin-right: 6px;
  padding: 2px 8px;
  margin-left: 2px;
  border-radius: 15px;
  /* background: ${({ $active }) => ($active ? '#00333D' : 'transparent')}; */
  background: ${theme('hoverBg')};

  &:hover {
    background: ${theme('border')};
  }

  transition: all 0.2s;
`

export const Count = styled.div`
  color: ${theme('thread.extraInfo')};
`
