import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  position: relative;
  ${css.flex('align-center')};
  color: ${theme('thread.extraInfo')};
  font-size: 12px;
`

export const holder = 1
