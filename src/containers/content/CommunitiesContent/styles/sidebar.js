import styled from 'styled-components'

import { cs } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
  width: 120px;
  margin-right: 20px;
  display: ${({ show }) => (show ? 'flex' : 'none')};
`
export const Holder = styled.div`
  flex-grow: 1;
`
