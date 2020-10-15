import styled from 'styled-components'

import { cs } from '@/utils'

const BaseWrapper = styled.div`
  z-index: 1;
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
  height: 30px;
  background: #002a35;
  border-bottom: 1px solid;
  border-bottom-color: #194d5f;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`

export const BottomWrapper = styled(BaseWrapper)`
  top: 10px;
  transform: rotate(180deg);
`

export const TopWrapper = styled(BaseWrapper)`
  bottom: 10px;
`

export const CloseBtn = styled.div`
  ${cs.flex('align-both')};
  width: 50px;
  height: 8px;
  border-radius: 8px;
  background: #194d5f;
  position: absolute;
  top: 26px;
  left: calc(50% - 25px);
`
