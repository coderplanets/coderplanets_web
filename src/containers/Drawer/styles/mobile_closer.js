import styled from 'styled-components'

import { cs } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div`
  z-index: 1;
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
  height: 30px;
  background: #002a35;
  border-bottom: 1px solid;
  border-bottom-color: #506063;
  border-bottom-left-radius: 22px;
  border-bottom-right-radius: 22px;
`
export const CloseBtn = styled.div`
  ${cs.flex('align-both')};
  width: 50px;
  height: 20px;
  border-radius: 8px;
  background: #506063;
  position: absolute;
  top: 18px;
  left: calc(50% - 25px);
`
export const UpIcon = styled(Img)`
  fill: #002a35;
  width: 18px;
  height: 18px;
  display: block;
`
