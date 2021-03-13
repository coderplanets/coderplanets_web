import styled from 'styled-components'

import { TActive } from '@/types'
import { css } from '@/utils'

export const Wrapper = styled.div<TActive>`
  ${css.flexColumn()};
  width: 120px;
  display: ${({ show }) => (show ? 'flex' : 'none')};
`
export const Holder = styled.div`
  flex-grow: 1;
`
