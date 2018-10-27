import styled from 'styled-components'

import Img from '../../Img'
import DotDividerBase from '../../DotDivider'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  position: relative;
`
export const CardWrapper = styled.div`
  position: absolute;
  background: ${theme('header.cardBg')};
  border-radius: 4px;
  width: 150px;
  height: 68px;
  border: 1px solid;
  border-color: ${theme('header.cardBorder')};
  z-index: 1000;
  top: 4px;
`
export const CommunityWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 2px;
`
export const CommunityLogo = styled(Img)`
  width: 50px;
  height: 50px;
  margin-right: 7px;
`
export const BetaLogo = styled(Img)`
  fill: #ef8145;
  height: 40px;
  width: 40px;
  margin-top: 5px;
  margin-left: 3px;
`
export const CommunityInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -2px;
`
export const LogoText = styled.div`
  color: ${theme('header.cardLogo')};
  font-size: 0.8rem;
  font-family: cursive;
`
export const CommunityTitle = styled.div`
  color: ${theme('header.cardTitle')};
  font-size: 1rem;
  font-weight: bold;
  margin-top: -2px;
`
export const Breadcrumbs = styled.div`
  max-width: 520px;
  margin-left: 160px;
  height: 100%;
  display: flex;
  align-items: center;
`
export const SiteMapWrapper = styled.div`
  display: flex;
  margin-left: 10px;
  align-items: center;
  font-size: 0.9rem;
`
export const DotDivider = styled(DotDividerBase)`
  background-color: ${theme('banner.desc')};
`
export const SiteLink = styled.a`
  color: ${theme('banner.desc')};
  &:hover {
    text-decoration: underline;
    color: ${theme('banner.title')};
  }
`

export const LogoHolder = styled(Img)`
  fill: ${theme('banner.desc')};
  width: 40px;
  height: 40px;
  opacity: 0.6;
`
