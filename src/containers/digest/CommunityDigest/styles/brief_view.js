import styled from 'styled-components'

import { css, WIDTH } from '@/utils'
import { BaseBanner } from './index'

export const Wrapper = styled(BaseBanner)`
  min-height: 45px;
`
export const BaseBannerContent = styled.div`
  ${css.flex()};
`
export const BannerContainer = styled(BaseBanner)``

export const TabBarWrapper = styled.div`
  ${css.flex()};
  max-width: ${WIDTH.COMMUNITY.PAGE};
  width: 100%;
  /* 150 is the breif card width */
  padding-left: calc(155px + 6vw);

  ${css.media.mobile`
    width: 55vw;
    overflow: scroll;
    margin-left: 45vw;
  `};
`
export const BannerContentWrapper = styled(BaseBannerContent)`
  width: 100%;
  ${css.flex('justify-center')};
`
