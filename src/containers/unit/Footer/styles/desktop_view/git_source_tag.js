import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex()};
`
export const Title = styled.div`
  font-size: 0.8rem;
  color: ${theme('thread.articleDigest')};
`
export const Tag = styled.div`
  ${css.smokey()()};
`
