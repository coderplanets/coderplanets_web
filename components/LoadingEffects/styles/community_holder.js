import styled from 'styled-components'

// import Img from '../../../components/Img'
import { theme, cs } from '../../../utils'

export const BannerWrapper = styled.div`
  ${cs.flex('align-center')};
  justify-content: center;
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

export const BannerText = styled.div`
  ${cs.truncate('45px')};
`
