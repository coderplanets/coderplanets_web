import styled from 'styled-components'

import { cs } from '@utils'
import { BaseBanner } from './index'

export const Wrapper = styled(BaseBanner)`
  min-height: 45px;
`
export const BaseBannerContent = styled.div`
  ${cs.flex()};
`
export const BannerContainer = styled(BaseBanner)``

export const TabberWrapper = styled.div`
  ${cs.flex()};
  max-width: ${cs.MAX_CONTENT_WIDTH};
  margin-top: 4px;
  width: 100%;
  padding: 0 15vw;

  ${cs.media.desktop`
    padding: 0 18vw;
  `};

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
