import styled from 'styled-components'

import { css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn('align-start', 'justify-center')};
  width: 140px;
  height: 36px;
  font-weight: bold;
  color: #7c8f90;
  background: #003948;
  padding: 6px 0;
  margin-top: 5px;
  border-radius: 4px;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.42);
`
export const Title = styled.div`
  margin-left: 10px;
  font-size: 13px;
`
