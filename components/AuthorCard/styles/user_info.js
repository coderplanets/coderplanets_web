import styled from 'styled-components'

import Img from '../../Img'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flex()};
`
export const Avatar = styled(Img)`
  ${cs.circle('40px')};
  display: block;
`
export const Brief = styled.div`
  ${cs.flexColumn()};
  margin-left: 12px;
`
export const Nickname = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 1rem;
`
export const Bio = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 0.8rem;
`
