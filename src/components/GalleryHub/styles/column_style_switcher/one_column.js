import styled from 'styled-components'

import { cs } from '@utils'

import { SwitchBarBase } from './index'

export const Wrapper = styled.div`
  ${cs.flex()};
  width: 20px;
  height: 16px;
  cursor: pointer;
  transform: scale(0.8);
`
export const MainBar = styled(SwitchBarBase)`
  width: 13px;
  height: 100%;
`
export const SubbarWrapper = styled.div`
  ${cs.flexColumn('justify-between')};
  width: 5px;
  height: 100%;
  margin-left: 2px;
`
export const SubBar = styled(SwitchBarBase)`
  width: 5px;
  height: 6px;
`
