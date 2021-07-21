import styled from 'styled-components'

import type { TActive } from '@/spec'

export const Wrapper = styled.div<TActive>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  justify-content: center;
`
export const holder = 1
