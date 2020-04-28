import styled from 'styled-components'

import { cs } from '@utils'

export const SwitchWrapper = styled.div`
  ${cs.flexColumn('justify-between')};
  width: 20px;
  height: 16px;
  cursor: pointer;
  transform: scale(0.8);
`
export const SwitchBarBase = styled.div`
  height: 6px;
  background: ${({ active }) => (active ? '#3680ad' : '#196780')};
  opacity: ${({ active }) => (active ? 1 : 0.8)};
  border-radius: 2px;

  ${SwitchWrapper}:hover & {
    background: #3680ad;
  }

  transition: all 0.25s;
`
