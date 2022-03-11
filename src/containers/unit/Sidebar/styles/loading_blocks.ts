import styled from 'styled-components'

import css, { theme, animate } from '@/utils/css'
import { SIDEBAR_WIDTH } from './metric'

export const Wrapper = styled.div`
  ${css.flexColumn('align-center')};
  background: ${theme('sidebar.bg')};
  width: ${SIDEBAR_WIDTH};
  height: 100vh;
  padding-top: 50px;
`
export const Block = styled.div`
  ${css.size(25)};
  border-radius: 4px;
  background: #002d39;
  margin-bottom: 25px;
  animation: ${animate.blink} 1.5s linear infinite alternate;
`
