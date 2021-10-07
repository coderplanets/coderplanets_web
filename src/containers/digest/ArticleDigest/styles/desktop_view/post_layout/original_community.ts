import styled from 'styled-components'

import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'
import SiteLogo from '@/icons/CPLogo'

export const Wrapper = styled.nav`
  ${css.flexColumn('align-both')};
  /* 
  ${css.media.laptopL`
    margin-left: -40px;
  `} */
`
export const HomeLogo = styled(SiteLogo)`
  ${css.size(32)};
  fill: #007fa8;
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
  margin-top: 1px;
  margin-bottom: 10px;
`
