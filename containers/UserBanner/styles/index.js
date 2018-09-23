import styled from 'styled-components'
import { theme } from '../../../utils'

export const BannerContainer = styled.nav`
  position: relative;
  min-height: 200px;
  padding-top: 8px;
  padding-bottom: 8px;
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

  transition: max-height 0.2s;
`

export const BannerContentWrapper = styled.div`
  display: flex;
  margin-left: 8%;
  margin-right: 8%;
`

export const UserBriefWrapper = styled.div`
  flex-grow: 1;
`
export const UserContributesWrapper = styled.div`
  width: 40%;
  max-width: 450px;
  margin-right: 20px;
  margin-top: 10px;
`
