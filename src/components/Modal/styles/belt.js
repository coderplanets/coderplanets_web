import styled from 'styled-components'

import { cs } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flex()};
  overflow: hidden;
  position: absolute;
  top: 20%;
  width: 100%;
  height: 250px;
  border: 1px dashed #327faf;
  background: #043b49;
  opacity: 0.8;
`
export const Holder = styled.div`
  width: 30%;
  height: 100%;
`
