import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex()};
  margin-bottom: 12px;
  margin-left: 2px;
`
export const TagDot = styled.div`
  ${css.circle('10px')};
  background: ${theme('baseColor.error')};
  margin-right: 5px;
`
export const TagTitle = styled.div`
  margin-top: -5px;
`
export const NoMoreDesc = styled.div`
  color: ${theme('banner.desc')};
  font-style: italic;
`
