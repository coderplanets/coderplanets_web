import styled from 'styled-components'

import { theme } from '../../../utils'

export const BannerContainer = styled.div`
  position: relative;
  min-height: 140px;
  border-bottom: 1px solid tomato;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${theme('banner.bg')};
  border-bottom: ${theme('banner.spliter')};
  @media (max-height: 800px) {
    min-height: 130px;
  }
`

export const TabberWrapper = styled.div`
  position: absolute;
  bottom: -17px;
  width: 80vw;
  display: flex;
  justify-content: center;
`

export const BannerContentWrapper = styled.div`
  display: flex;
  margin-left: 8%;
  margin-right: 8%;
`
