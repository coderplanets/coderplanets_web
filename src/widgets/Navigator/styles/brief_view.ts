import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import Img from '@/Img'
import CommunityFaceLogo from '@/widgets/CommunityFaceLogo'

export const Wrapper = styled.div`
  ${css.flex()};
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
  top: 6.5px;
`
export const CommunityWrapper = styled.div`
  ${css.flex('align-both')};
  width: 100%;
  height: 100%;
`
export const CommunityLogo = styled(CommunityFaceLogo)`
  ${css.size(32)};
  margin-right: 10px;
`
export const CommunityInfo = styled.div`
  ${css.flexColumn()};
  margin-top: -2px;
`
export const LogoText = styled.a`
  color: ${theme('header.cardLogoText')};
  font-size: 0.8rem;
  font-family: Cursive, Helvetica;
  display: block;

  &:hover {
    text-decoration: none;
    color: ${theme('header.cardLogoText')};
  }
`

export const CommunityTitle = styled.div`
  color: ${theme('header.cardTitle')};
  font-size: 1rem;
  font-weight: bold;
  margin-top: -2px;

  ${css.cutRest('90px')};
`
export const Breadcrumbs = styled.div`
  ${css.flex('align-center')};
  max-width: 650px;
  margin-left: 160px;
  height: 100%;
`

export const LogoHolder = styled(Img)`
  fill: ${theme('banner.desc')};
  ${css.size(40)};
  opacity: 0.6;
`
