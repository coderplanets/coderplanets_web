import styled from 'styled-components'
import ReactSVG from 'react-svg'

import { theme } from '../../../utils'

export const Banner = styled.div`
  position: relative;
  height: 16vh;
  border-bottom: 1px solid tomato;
  display: flex;
  flex-direction: column;
  background: ${theme('banner.bg')};
  border-bottom: ${theme('banner.spliter')};
`
export const TopHalf = styled.div`
  display: flex;
`
export const CommunityWrapper = styled.div`
  display: flex;
  min-width: 50%;
  max-width: 60%;
`

export const LeftPadding = styled.div`
  width: 11vw;
`
export const RightPadding = styled.div`
  width: 10vw;
`
export const CommunityLogo = styled(ReactSVG)`
  margin-top: 1em;
  width: 80px;
  height: 80px;
`
export const CommunityInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1em;
`

export const Title = styled.div`
  font-size: 1.8em;
  color: ${theme('font')};
`
export const Desc = styled.div`
  font-size: 1.3em;
  color: ${theme('font')};
`

export const BannerLogo = styled(ReactSVG)`
  margin-top: 1em;
  width: 60px;
  // height: 80px;
`

export const TabberWrapper = styled.div`
  position: absolute;
  bottom: -17px;
  width: 80vw;
  display: flex;
`
