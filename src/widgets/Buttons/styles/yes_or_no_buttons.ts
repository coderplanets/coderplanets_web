import styled from 'styled-components'

import css, { theme } from '@/utils/css'

type TWrapper = { align: 'center' | 'right' }
export const Wrapper = styled.div<TWrapper>`
  ${css.flex('align-center')};
  width: auto;
  justify-content: ${({ align }) =>
    align === 'center' ? 'center' : 'flex-end'};
`
export const CancelBtn = styled.div`
  opacity: 0.8;
  color: ${theme('button.primary')};
  font-size: 14px;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  transition: opacity 0.2s;
`
