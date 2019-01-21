import styled from 'styled-components'

import { cs, theme } from 'utils'
import Img from '../../Img'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
`
export const BannerWrapper = styled.div`
  ${cs.flex()};
  margin-bottom: 15px;
`
export const Logo = styled(Img)`
  width: 48px;
  height: 48px;
  border-radius: 4px;
`
export const PartnerInfo = styled.div`
  ${cs.flexColumn('justify-center')};
  margin-left: 5px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 0.9rem;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 0.8rem;
`
