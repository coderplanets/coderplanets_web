import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  &:hover {
    cursor: pointer;
  }
`
export const ToggleIcon = styled(Img)`
  fill: ${theme('banner.title')};
  ${css.size(25)};
  margin-right: 5px;
  display: block;
`

export const ToggleTitle = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 0.9rem;
`
