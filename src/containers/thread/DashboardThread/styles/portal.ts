import styled from 'styled-components'

import { theme } from '@/utils/css'

export const Wrapper = styled.div``
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 19px;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
  margin-top: 10px;
`
