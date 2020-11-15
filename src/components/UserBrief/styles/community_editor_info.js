import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn()};
`
export const Title = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  margin-bottom: 16px;
`
