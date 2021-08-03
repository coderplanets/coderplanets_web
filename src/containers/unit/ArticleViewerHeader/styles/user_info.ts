import styled from 'styled-components'

import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexGrow('align-center')};
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
  ${css.circle(35)};
  margin-right: 10px;
`
