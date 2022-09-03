import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  color: ${theme('banner.desc')};
  margin-top: 10%;
  margin-left: 24px;
`
export const holder = 1
