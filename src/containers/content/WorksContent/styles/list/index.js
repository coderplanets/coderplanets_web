import styled from 'styled-components'

import { cs, theme } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
  width: 100%;
  color: ${theme('thread.articleTitle')};
  background: #08333e;
  border-radius: 4px;
`
export const Holder = styled.div``
