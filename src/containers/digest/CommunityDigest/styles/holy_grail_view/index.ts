import styled from 'styled-components'

import { css } from '@/utils'

export const Wrapper = styled.div`
  background: transparent;
  ${css.flexColumn('justify-start')};
  position: relative;
  width: 150px;
  margin-top: 10px;
`
export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #014758;
  margin-top: 15px;
  margin-bottom: 15px;
`
