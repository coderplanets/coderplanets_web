import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  display: flex;
  color: ${theme('banner.desc')};
`
export const MoreIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  ${css.size(15)};
`
const TextOption = styled.div`
  font-size: 0.7rem;
  display: none;
  opacity: 0.8;
  ${Wrapper}:hover & {
    display: block;
  }
  &:hover {
    color: ${theme('banner.title')};
    cursor: pointer;
    opacity: 1;
  }
`

export const IncludeOption = styled(TextOption)`
  margin-right: -3px;
`
export const ExcludeOption = styled(TextOption)`
  margin-left: -3px;
`
