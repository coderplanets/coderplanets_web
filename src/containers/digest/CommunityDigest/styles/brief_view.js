import styled from 'styled-components'

import { cs } from '@/utils'
import { BaseBanner } from './index'

export const Wrapper = styled(BaseBanner)`
  min-height: 45px;
`
export const BaseBannerContent = styled.div`
  ${cs.flex()};
`
export const BannerContainer = styled(BaseBanner)``

export const TabBarWrapper = styled.div`
  ${cs.flex()};
  max-width: ${cs.MAX_CONTENT_WIDTH};
  width: 100%;
  /* 150 is the breif card width */
  padding-left: calc(155px + 6vw);

  ${cs.media.mobile`
    width: 55vw;
    overflow: scroll;
    margin-left: 45vw;
  `};
`
export const BannerContentWrapper = styled(BaseBannerContent)`
  width: 100%;
  ${cs.flex('justify-center')};
`
