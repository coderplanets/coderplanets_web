import styled from 'styled-components'

import Img from '@Img'
import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flex('align-start')};
`
export const Normal = styled.div`
  color: ${theme('banner.desc')};
  font-size: 14px;
  max-width: 500px;

  /* ${cs.media.tablet`
    ${cs.truncate('220px')};
  `};

  ${cs.media.mobile`
    ${cs.truncate('180px')};
  `}; */
`
export const MoreIcon = styled(Img)`
  fill: ${theme('banner.title')};
  width: 16px;
  height: 16px;
  display: block;
  cursor: pointer;
`
export const MoreText = styled.div`
  color: ${theme('banner.desc')};
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: ${theme('banner.title')};
  }
`
