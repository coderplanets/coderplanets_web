import styled from 'styled-components'

import { theme, cs } from '@/utils'

export const Wrapper = styled.div`
  font-size: 22px;
  color: ${theme('thread.articleTitle')};

  ${cs.truncate('100%')};
`

export const holder = 1
