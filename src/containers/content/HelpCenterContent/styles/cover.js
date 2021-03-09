import styled from 'styled-components'

import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex()};
  background: ${theme('thread.bg')};
  flex-wrap: wrap;
  padding: 80px 30px;
  padding-right: 10px;
`

export const holder = 1
