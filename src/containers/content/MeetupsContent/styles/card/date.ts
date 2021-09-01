import styled from 'styled-components'

import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn('align-center')};
  width: 70px;
  margin-right: 5px;
  margin-top: 4px;
`
export const Divider = styled.div`
  height: 1px;
  width: 40%;
  background: #054252;
  margin-top: 5px;
  margin-bottom: 5px;
`
export const WeekName = styled.div`
  font-size: 13px;
`
export const DateNum = styled.div`
  font-size: 12px;
  margin-top: -2px;
`
export const Label = styled.div`
  color: #3a81ab;
  font-size: 13px;
  margin-top: 8px;
`
