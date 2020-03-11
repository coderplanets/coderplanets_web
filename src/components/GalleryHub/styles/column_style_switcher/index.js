import styled from 'styled-components'

import { cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-center')};
  margin-top: -4px;
`
export const Hint = styled.div`
  color: #196780;
  font-size: 12px;
  margin-bottom: 8px;
  opacity: 0;

  ${Wrapper}:hover & {
    opacity: 1;
  }

  transition: opacity 0.25s;
`
export const ContentWrapper = styled.div`
  ${cs.flex('align-center', 'justify-between')};
  width: 100px;
`
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
