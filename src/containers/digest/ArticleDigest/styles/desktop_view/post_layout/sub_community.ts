import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

export const Wrapper = styled.nav`
  ${css.flexColumn('align-both')};
  margin-top: 2px;
  /* margin-left: 8px;

  ${css.media.laptopL`
    margin-left: -40px;
  `} */
`
export const Icon = styled(Img)`
  ${css.size(32)};
`
export const Name = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 14px;
  margin-top: 12px;
  margin-bottom: 2px;
`
export const JoinDesc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
  margin-bottom: 10px;
`
