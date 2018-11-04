import styled from 'styled-components'

import { theme, cs } from '../../../utils'

export const BannerContainer = styled.div`
  ${cs.flexColumn('justify-center')};

  position: relative;
  min-height: 140px;
  border-bottom: 1px solid tomato;
  background: ${theme('banner.bg')};
  border-bottom: ${theme('banner.spliter')};
  @media (max-height: 800px) {
    min-height: 130px;
  }
`

export const TabberWrapper = styled.div`
  ${cs.flex('justify-center')};

  position: absolute;
  bottom: -16px;
  width: 80vw;
`

export const BannerContentWrapper = styled.div`
  ${cs.flex()};
  margin-left: 8%;
  margin-right: 8%;
`
