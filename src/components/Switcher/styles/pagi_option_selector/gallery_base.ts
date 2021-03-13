import styled from 'styled-components'

import { TActive } from '@/types'
import { css } from '@/utils'

export const SwitchWrapper = styled.div`
  ${css.flexColumn('justify-between')};
  width: 20px;
  height: 16px;
  cursor: pointer;
  transform: scale(0.8);
`
export const SwitchBarBase = styled.div<TActive>`
  height: 6px;
  background: ${({ active }) => (active ? '#3680ad' : '#196780')};
  opacity: ${({ active }) => (active ? 1 : 0.8)};
  border-radius: 2px;

  ${SwitchWrapper}:hover & {
    background: #3680ad;
  }

  transition: all 0.25s;
`
