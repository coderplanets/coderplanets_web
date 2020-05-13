import styled from 'styled-components'

import { cs } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flex()};
  flex-wrap: wrap;

  margin-left: 15px;
  margin-top: -1px;
  max-width: 80%;
`
export const TagWrapper = styled.div`
  margin-bottom: ${({ margin }) => (margin ? '5px' : 0)};
`
