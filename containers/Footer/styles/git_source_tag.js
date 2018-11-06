import styled from 'styled-components'

import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flex()};
`
export const Title = styled.div`
  font-size: 0.8rem;
  color: ${theme('thread.articleDigest')};
`
export const Tag = styled.div`
  ${cs.smokey()};
`
