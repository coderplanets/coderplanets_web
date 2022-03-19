import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

import SiteLogo from '@/icons/CPLogo'
import DotDivider from '@/widgets/DotDivider'

export const Wrapper = styled.div`
  height: 150px;
  width: 100%;
`
export const SiteWrapper = styled.div`
  ${css.flex('align-both')};
  width: 100%;
  height: 40px;
  margin-top: 20px;
`
export const Logo = styled(SiteLogo)`
  fill: #196f71;
  ${css.size(12)};
`
export const SiteTitle = styled.div`
  font-size: 14px;
  color: #196f71;
  margin-left: 2px;
  margin-bottom: 1px;
`
export const SiteInfoWrapper = styled.div`
  ${css.flex('align-both')};
`
export const Item = styled.a`
  ${css.flex('align-center')};
  color: ${theme('footer.text')};
  text-decoration: none;
  font-size: 12px;
  &:hover {
    color: ${theme('footer.text')};
  }
`
export const ItemIcon = styled(Img)`
  fill: ${theme('baseColor.red')};
  ${css.size(10)};
  margin-left: 5px;
`
export const Divider = styled(DotDivider)`
  background: ${theme('footer.text')};
`
export const VersionWrapper = styled.div`
  ${css.flex('align-both')};
  margin-top: 10px;
`
