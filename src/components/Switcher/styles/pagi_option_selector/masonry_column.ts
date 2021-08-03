import styled from 'styled-components'

import css from '@/utils/css'

import { SwitchBarBase } from './gallery_base'

export const Wrapper = styled.div`
  ${css.flex('justify-between')};
  width: 20px;
  height: 16px;
  cursor: pointer;
  transform: scale(0.8);
`
export const BarRow = styled.div`
  ${css.flexColumn('justify-between')};
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
