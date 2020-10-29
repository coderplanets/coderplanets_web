import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

export const Wrapper = styled.nav`
  ${css.flexColumn('align-both')};
  margin-left: 8px;

  ${css.media.laptopL`
    margin-left: -40px;
  `}
`
export const Avatar = styled(Img)`
  ${css.circle('36px')};
`
export const AvatarFallback = styled(Img)`
  ${css.flex('align-both')};
  ${css.circle('36px')};
  background: #022a34;
  color: ${theme('thread.articleDigest')};
`
export const Name = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  margin-top: 12px;
  margin-bottom: 10px;
`
