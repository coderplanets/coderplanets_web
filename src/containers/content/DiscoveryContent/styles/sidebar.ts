import styled from 'styled-components'

import type { TActive } from '@/spec'
import css from '@/utils/css'

export const Wrapper = styled.div<TActive>`
  ${css.flexColumn()};
  width: 120px;
  display: ${({ show }) => (show ? 'flex' : 'none')};
`
export const Holder = styled.div`
  flex-grow: 1;
`
