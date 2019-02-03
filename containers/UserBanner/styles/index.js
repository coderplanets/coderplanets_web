import styled from 'styled-components'
import { theme, cs } from 'utils'

export const BannerContainer = styled.nav`
  ${cs.flexColumn('justify-center')};

  position: relative;
  min-height: 200px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid;
  background: ${theme('banner.bg')};
  border-bottom-color: ${theme('banner.spliter')};
  @media (max-height: 800px) {
    min-height: 130px;
  }

  transition: max-height 0.2s;
`

export const BannerContentWrapper = styled.div`
  ${cs.flex('justify-between')};
  margin-left: 8%;
  margin-right: 8%;
`
export const UserBriefWrapper = styled.div`
  width: 60%;
  ${cs.media.mobile`width: 100%`};
`
export const UserContributesWrapper = styled.div`
  width: 36%;
  max-width: 450px;
  margin-top: 10px;
  ${cs.media.mobile`display: none`};
`
