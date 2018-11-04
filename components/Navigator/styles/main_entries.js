import styled from 'styled-components'

import DotDividerBase from '../../DotDivider'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};

  margin-left: 10px;
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
