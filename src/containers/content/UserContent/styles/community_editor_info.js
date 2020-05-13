import styled from 'styled-components'

import { theme, cs } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
  margin-top: 10px;
  color: ${theme('banner.desc')};
  flex-wrap: wrap;
`

export const Text = styled.div`
  font-size: 0.9rem;
  margin-top: 1px;
  color: ${theme('thread.articleDigest')};
  margin-left: 3px;
`
export const MoreText = styled.div`
  font-size: 0.8rem;
  color: ${theme('thread.articleDigest')};
  margin-top: -5px;
`
