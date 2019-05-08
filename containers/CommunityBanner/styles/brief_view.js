import styled from 'styled-components'

import { cs } from '@utils'
import { BaseBanner } from './index'

export const Wrapper = styled(BaseBanner)`
  min-height: 45px;
`
export const BaseBannerContent = styled.div`
  ${cs.flex()};
  margin-left: 8%;
  margin-right: 8%;
`
export const BannerContainer = styled(BaseBanner)``

export const TabberWrapper = styled.div`
  ${cs.flex()};
  width: 80vw;
  margin-left: 250px;
  margin-top: 4px;

  @media (min-width: 1600px) {
    margin-left: 270px;
  }

  ${cs.media.mobile`
    width: 55vw;
    overflow: scroll;
    margin-left: 45vw;
  `};
`
export const BannerContentWrapper = styled(BaseBannerContent)``
