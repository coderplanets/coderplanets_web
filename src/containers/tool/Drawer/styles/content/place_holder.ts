import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn('align-both')};
  height: 100%;
`
export const SiteLogo = styled(Img)`
  margin-top: -25%;
  ${css.size(120)};
  opacity: 0.2;
`
export const Desc = styled.div`
  color: ${theme('banner.desc')};
  font-size: 1rem;
  margin-top: 20px;
  font-weight: bold;
`
