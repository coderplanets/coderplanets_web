import styled from 'styled-components'

import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  width: 100%;
`
export const TabWrapper = styled.div`
  ${css.flex('align-center')};
  position: absolute;
  left: 0;
  bottom: -1px;
`
