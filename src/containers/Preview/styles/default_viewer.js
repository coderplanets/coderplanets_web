import styled from 'styled-components'

import Img from '@Img'
import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-both')};
  height: 100%;
`
export const SiteLogo = styled(Img)`
  margin-top: -25%;
  width: 120px;
  height: 120px;
  display: block;
  opacity: 0.2;
`
export const Desc = styled.div`
  color: ${theme('banner.desc')};
  font-size: 1rem;
  margin-top: 20px;
  font-weight: bold;
`
