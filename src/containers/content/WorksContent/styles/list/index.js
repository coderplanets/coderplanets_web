import styled from 'styled-components'

import { cs, theme } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
  width: 100%;
  color: ${theme('thread.articleTitle')};
  border-radius: 4px;
`
export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: #004353;
  margin-top: 26px;
  margin-bottom: 26px;
  opacity: 0.6;
`
