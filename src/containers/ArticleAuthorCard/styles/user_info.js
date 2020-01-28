import styled from 'styled-components'

import Img from '@Img'
import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
`
export const Avatar = styled(Img)`
  ${cs.circle('25px')};
  display: block;
  margin-right: 10px;

  ${cs.media.mobile`
    ${cs.circle('25px')};
  `};
`
export const Brief = styled.div`
  ${cs.flex()};
`
export const Nickname = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 16px;
  flex-grow: 1;
`
export const Bio = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 15px;
  margin-top: 10px;
`
