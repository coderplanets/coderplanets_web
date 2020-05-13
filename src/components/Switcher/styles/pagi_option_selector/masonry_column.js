import styled from 'styled-components'

import { cs } from '@/utils'
import { SwitchBarBase } from './gallery_base'

export const Wrapper = styled.div`
  ${cs.flex('justify-between')};
  width: 20px;
  height: 16px;
  cursor: pointer;
  transform: scale(0.8);
`
export const BarRow = styled.div`
  ${cs.flexColumn('justify-between')};
`
export const Bar = styled(SwitchBarBase)`
  width: 4px;
  height: 9px;
`
export const Dot = styled(SwitchBarBase)`
  width: 4px;
  height: 4px;
  border-radius: 50%;
`
