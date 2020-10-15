import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

import DotDivider from '@/components/DotDivider'

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
export const SiteLogo = styled(Img)`
  fill: #196f71;
  width: 18px;
  height: 18px;
  display: block;
`
export const SiteTitle = styled.div`
  font-size: 14px;
  color: #196f71;
  margin-left: 10px;
  margin-top: 1px;
`
export const SiteInfoWrapper = styled.div`
  ${css.flex('align-both')};
`
export const Item = styled.div`
  color: ${theme('footer.text')};
  font-size: 12px;
`
export const Divider = styled(DotDivider)`
  background: ${theme('footer.text')};
`
export const VersionWrapper = styled.div`
  ${css.flex('align-both')};
  margin-top: 10px;
`
