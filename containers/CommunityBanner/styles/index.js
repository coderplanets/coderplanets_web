import styled from 'styled-components'

import { Img } from '../../../components'
import { theme } from '../../../utils'

// TODO: extract it
const BaseBanner = styled.nav`
  position: relative;
  min-height: 140px;
  border-bottom: 1px solid tomato;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${theme('banner.bg')};
  border-bottom: 1px solid;
  border-bottom-color: ${theme('banner.spliter')};
  @media (max-height: 800px) {
    min-height: 130px;
  }
`
const BaseTabber = styled.div`
  position: absolute;
  bottom: -16px;
  width: 80vw;
  display: flex;
`
export const BaseBannerContent = styled.div`
  display: flex;
  margin-left: 8%;
  margin-right: 8%;
`

export const BannerContainer = BaseBanner.extend`
  min-height: 125px;
`
export const TabberWrapper = BaseTabber.extend``
export const BannerContentWrapper = BaseBannerContent.extend``

export const CommunityWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  margin-top: -2rem;
`

export const CommunityLogo = styled(Img)`
  width: 60px;
  height: 60px;
  @media (max-height: 800px) {
    width: 50px;
    height: 50px;
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
  font-size: 1.4rem;
  color: ${theme('banner.title')};
  @media (max-height: 800px) {
    font-size: 1.3rem;
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
