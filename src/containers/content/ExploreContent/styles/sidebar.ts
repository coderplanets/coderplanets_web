import styled from 'styled-components'

import type { TActive } from '@/spec'
import css from '@/utils/css'

export const Wrapper = styled.div<TActive>`
  ${css.flexColumn()};
  width: 140px;
  min-width: 140px;
  margin-right: 50px;
  margin-left: 20px;
  display: ${({ show }) => (show ? 'flex' : 'none')};
`
export const Holder = styled.div`
  flex-grow: 1;
`
