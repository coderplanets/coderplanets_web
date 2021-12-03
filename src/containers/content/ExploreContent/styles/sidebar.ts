import styled from 'styled-components'

import type { TActive } from '@/spec'
import css from '@/utils/css'

export const Wrapper = styled.div<TActive>`
  ${css.flexColumn()};
  width: 120px;
  min-width: 120px;
  margin-right: 70px;
  margin-left: 30px;
  display: ${({ show }) => (show ? 'flex' : 'none')};
`
export const Holder = styled.div`
  flex-grow: 1;
`
