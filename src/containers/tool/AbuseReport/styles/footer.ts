import styled from 'styled-components'

import { theme } from '@/utils/themes'

export const Wrapper = styled.div`
  background: ${theme('modal.subPanel')};
  height: 50px;
`
export const Note = styled.div`
  color: ${theme('thread.articleDigest')};
  margin-top: 22px;
  margin-bottom: 18px;
  font-size: 14px;
`
