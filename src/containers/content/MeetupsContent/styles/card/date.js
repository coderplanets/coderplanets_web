import styled from 'styled-components'

import { cs } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-center')};
  width: 70px;
  margin-right: 5px;
`
export const Divider = styled.div`
  height: 2px;
  width: 80%;
  background: #054252;
  margin-top: 5px;
  margin-bottom: 5px;
`
export const DateWrapper = styled.div`
  ${cs.flexColumn('align-center')};
  width: 70px;
`
export const WeekName = styled.div`
  font-size: 13px;
`
export const DateNum = styled.div`
  font-size: 15px;
`
