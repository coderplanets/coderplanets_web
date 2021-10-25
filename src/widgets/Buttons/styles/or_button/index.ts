import styled from 'styled-components'

import css from '@/utils/css'

export const OrSignBase = styled.div`
  ${css.flex('align-both')};
  position: absolute;
  top: 5px;
  left: calc(50% - 8.5px);
  font-size: 10px;
  font-weight: bold;
  color: #99b9bf;
  background: #002b35;
  border-radius: 100%;
  z-index: 1;
  ${css.size(16)};
  text-align: center;
`

export const holder = 1
