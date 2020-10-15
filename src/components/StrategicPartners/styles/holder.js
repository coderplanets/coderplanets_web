import styled from 'styled-components'

import { theme, css } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flex()};
`
export const BannerWrapper = styled.div`
  ${css.flex()};
  margin-bottom: 12px;
`
export const Logo = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 30px;
  height: 30px;
  opacity: 0;
  ${BannerWrapper}:hover & {
    opacity: 1;
  }
  transition: all 0.2s;
  transition-delay: 0.2s;
`
export const PartnerInfo = styled.div`
  ${css.flexColumn('justify-center')};
  align-items: center;
  margin-right: 40px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 0.9rem;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 0.8rem;
  opacity: 0;
  ${BannerWrapper}:hover & {
    opacity: 1;
  }
  transition: all 0.2s;
`
