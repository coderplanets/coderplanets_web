import styled from 'styled-components'

import { cs } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-center')};
  width: ${({ size }) => (size == 'default' ? '70px' : '50px')};
  margin-right: ${({ size }) => (size == 'default' ? '5px' : '2px')};
  margin-top: ${({ size }) => (size == 'default' ? '0' : '-2px')};
`
export const Divider = styled.div`
  height: 2px;
  width: 80%;
  background: #054252;
  margin-top: ${({ size }) => (size == 'default' ? '5px' : '2px')};
  margin-bottom: ${({ size }) => (size == 'default' ? '5px' : '1px')};
`
export const DateWrapper = styled.div`
  ${cs.flexColumn('align-center')};
  width: 70px;
`
export const WeekName = styled.div`
  font-size: 13px;
`
export const DateNum = styled.div`
  font-size: ${({ size }) => (size == 'default' ? '15px' : '14px')};
`
