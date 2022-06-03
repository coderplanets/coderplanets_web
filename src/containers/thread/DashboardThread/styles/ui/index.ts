import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
`

export const BaseSection = styled.section`
  /* margin: 0 50px; */
  padding-bottom: 50px;
  border-bottom: 1px solid;
  margin-bottom: 40px;
  border-bottom-color: ${theme('border')};
`
