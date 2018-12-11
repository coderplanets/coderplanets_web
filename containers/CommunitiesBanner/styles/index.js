import styled from 'styled-components'

import { theme, cs } from '../../../utils'

export const BannerContainer = styled.div`
  ${cs.flexColumn('justify-center')};

  position: relative;
  min-height: 170px;
  border-bottom: 1px solid;
  background: ${theme('banner.bg')};
  border-bottom: ${theme('banner.spliter')};
  @media (max-height: 800px) {
    min-height: 160px;
  }
`
export const ContentWrapper = styled.div`
  ${cs.flexColumn('align-center')};
  justify-content: center;
  width: 100%;
  margin-top: -30px;
`
export const Title = styled.div`
  color: ${theme('banner.title')};
  font-size: 1.1rem;
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
