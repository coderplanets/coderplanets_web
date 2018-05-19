import styled from 'styled-components'

import { Img } from '../../../components'
import { theme } from '../../../utils'
import { BaseBanner, BaseTabber, BaseBannerContent } from './index'

export const BannerContainer = BaseBanner.extend``
export const TabberWrapper = BaseTabber.extend``
export const BannerContentWrapper = BaseBannerContent.extend``

export const CommunityWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  margin-top: -2em;
`

export const CommunityLogo = styled(Img)`
  width: 70px;
  height: 70px;
  @media (max-height: 800px) {
    width: 60px;
    height: 60px;
  }
`
export const CommunityInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -6px;
  margin-left: 1em;
`

export const Title = styled.div`
  font-size: 1.5rem;
  color: ${theme('font')};
  @media (max-height: 800px) {
    font-size: 1.4rem;
  }
`
// color: ${theme('font')};
export const Desc = styled.div`
  font-size: 1rem;
  color: ${theme('banner.desc')};
  @media (max-height: 800px) {
    font-size: 1rem;
  }
`
