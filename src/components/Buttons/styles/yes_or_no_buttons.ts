import styled from 'styled-components'

import { css, theme } from '@/utils'

type TWrapper = { align: 'center' | 'right' }
export const Wrapper = styled.div<TWrapper>`
  ${css.flex('align-center')};
  width: 100%;
  justify-content: ${({ align }) =>
    align === 'center' ? 'center' : 'flex-end'};
`
export const CancelBtn = styled.div`
  color: ${theme('button.primary')};
  font-size: 14px;
`
