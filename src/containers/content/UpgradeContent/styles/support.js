import styled from 'styled-components'
import Img from '@/Img'
import { theme, css } from '@/utils'

export const PkgItem = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 7px;
`
export const PkgItemTitle = styled.div`
  color: ${({ not }) =>
    !not ? theme('thread.articleTitle') : theme('thread.articleDigest')};
  font-size: 14px;
`
const PkgItemIcon = styled(Img)`
  margin-right: 6px;
`
export const PkgItemYesIcon = styled(PkgItemIcon)`
  fill: ${theme('baseColor.green')};
  width: 14px;
  height: 12px;
  margin-right: 6px;
`
export const ArrowIcon = styled(PkgItemIcon)`
  width: 16px;
  height: 16px;
  display: block;
  fill: ${theme('baseColor.green')};
`
export const PkgItemNoIcon = styled(PkgItemIcon)`
  fill: ${theme('baseColor.red')};
  width: 12px;
  height: 10px;
  margin-right: 6px;
  opacity: 0.6;
`
