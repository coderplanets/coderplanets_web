import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn()};
`
export const Avatar = styled(Img)`
  ${css.circle(25)};
  margin-right: 10px;

  ${css.media.mobile`
    ${css.circle(25)};
  `};
`
export const Brief = styled.div`
  ${css.flex()};
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
