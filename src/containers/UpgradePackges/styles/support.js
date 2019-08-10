import styled from 'styled-components'
import Img from '@components/Img'
import { theme, cs } from '@utils'

export const PkgItem = styled.div`
  ${cs.flex()};
  margin-bottom: 5px;
`
export const PkgItemTitle = styled.div`
  color: ${({ not }) => (!not ? theme('banner.title') : theme('banner.desc'))};
  font-size: 0.9rem;
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
export const PkgItemNoIcon = styled(PkgItemIcon)`
  fill: ${theme('baseColor.error')};
  width: 12px;
  height: 10px;
  margin-right: 6px;
  opacity: 0.6;
`
