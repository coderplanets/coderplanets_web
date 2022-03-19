import styled from 'styled-components'

import { theme } from '@/utils/css'

export const Wrapper = styled.div`
  background: ${theme('modal.subPanel')};
  min-height: 360px;
`

export const EmptyHint = styled.div`
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
  margin-top: 15px;
  margin-left: 20px;
`
