import styled from 'styled-components'
import { theme } from '../../../utils'

export const BannerContainer = styled.nav`
  position: relative;
  min-height: 180px;
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

/* export const TabberWrapper = BaseTabber.extend`` */
export const BannerContentWrapper = styled.div`
  display: flex;
  margin-left: 8%;
  margin-right: 8%;
`

export const UserBriefWrapper = styled.div`
  flex-grow: 1;
  align-self: center;
`
export const UserContributesWrapper = styled.div`
  width: 40%;
  max-width: 400px;
`
