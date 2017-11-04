import styled from 'styled-components'
import ReactSVG from 'react-svg'

import { theme } from '../../../utils/themes'

export const Banner = styled.div`
  position: relative;
  padding-left: 10vw;
  height: 16vh;
  border-bottom: 1px solid tomato;
  display: flex;
  flex-direction: column;
  background: ${theme('banner.bg')};
  border-bottom: ${theme('banner.spliter')};
`
export const Title = styled.div`
  font-size: 2em;
  color: ${theme('font')};
  margin-top: 0.8em;
`
export const Desc = styled.div`
  font-size: 1.3em;
  color: ${theme('font')};
`

export const BannerLogo = styled(ReactSVG)`
  margin-top: 1em;
  width: 80px;
  height: 80px;
`

export const TabberWrapper = styled.div`
  position: absolute;
  bottom: -17px;
  width: 80vw;
`
