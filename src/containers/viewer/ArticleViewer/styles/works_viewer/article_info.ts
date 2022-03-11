import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center', 'justify-between')};
  width: 100%;
  height: 60px;
  border-bottom: 1px solid;
  border-bottom-color: ${theme('drawer.divider')};
  position: relative;
`
export const TabWrapper = styled.div`
  ${css.flex('align-center')};
  position: absolute;
  left: 0;
  bottom: -1px;
`
