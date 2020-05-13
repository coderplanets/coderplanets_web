import styled from 'styled-components'

import { cs } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-both')};
`
export const Title = styled.div`
  font-size: 12px;
  color: #196780;
  margin-top: -5px;
  margin-bottom: 4px;
  opacity: 0;
  ${Wrapper}:hover & {
    opacity: 1;
  }
  transition: opacity 0.25s;
`
