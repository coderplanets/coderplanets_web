import styled from 'styled-components'

// import Img from '@/Img'
import { theme, cs } from '@/utils'

export const BannerWrapper = styled.div`
  ${cs.flex('align-both')};
  width: 60px;
  height: 60px;
  border-radius: 4px;
  border-style: double;
  border-color: ${theme('banner.desc')};
  color: ${theme('banner.desc')};
`
export const SidebarText = styled.div`
  color: ${theme('sidebar.holder')};
  text-align: center;
  margin-left: 5px;
`
export const CommunitiesText = styled.div`
  ${cs.flex('align-both')};
  color: ${theme('banner.desc')};
  width: 54px;
  height: 54px;
  border-radius: 4px;
  border-style: double;
  border-color: ${theme('banner.desc')};
  text-align: center;
  margin-top: -35px;
  margin-bottom: 8px;
`
export const BannerText = styled.div`
  ${cs.truncate('45px')};
  text-align: center;
`
