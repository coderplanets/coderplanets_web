import styled from 'styled-components'

import Img from '@/Img'
import { theme, cs } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexGrow('align-center')};
`
export const UserName = styled.div`
  font-size: 0.9rem;
  color: ${theme('thread.articleTitle')};
`
export const PublishAt = styled.div`
  font-size: 0.8rem;
  color: ${theme('thread.articleDigest')};
`
export const Avatar = styled(Img)`
  ${cs.circle('35px')};
  margin-right: 10px;
`
