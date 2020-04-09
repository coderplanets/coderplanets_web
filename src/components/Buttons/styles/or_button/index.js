import styled from 'styled-components'

import { cs } from '@utils'

export const OrSignBase = styled.div`
  ${cs.flex('align-both')};
  position: absolute;
  top: 5px;
  left: calc(50% - 8.5px);
  font-size: 10px;
  font-weight: bold;
  color: #99b9bf;
  background: #002b35;
  border-radius: 100%;
  z-index: 1;
  width: 16px;
  height: 16px;
`

export const holder = 1
