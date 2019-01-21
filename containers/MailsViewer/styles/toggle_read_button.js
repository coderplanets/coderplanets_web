import styled from 'styled-components'

import Img from 'components/Img'
import { cs, theme } from 'utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
  &:hover {
    cursor: pointer;
  }
`
export const ToggleIcon = styled(Img)`
  fill: ${theme('banner.title')};
  width: 25px;
  height: 25px;
  margin-right: 5px;
  display: block;
`

export const ToggleTitle = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 0.9rem;
`
