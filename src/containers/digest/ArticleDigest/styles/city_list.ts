import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
`
export const Item = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 1rem;
`
export const SlashDivider = styled.span`
  margin-left: 4px;
  margin-right: 4px;
`
