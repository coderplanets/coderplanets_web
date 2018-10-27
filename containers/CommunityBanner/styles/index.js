import styled from 'styled-components'

// import Img from '../../../components/Img'
/* import { Img } from '../../../components' */
import { theme } from '../../../utils'

export const BaseBanner = styled.nav`
  position: relative;
  min-height: 140px;
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
export const BaseTabber = styled.div`
  position: absolute;
  bottom: -16px;
  width: 80vw;
  display: flex;
`
