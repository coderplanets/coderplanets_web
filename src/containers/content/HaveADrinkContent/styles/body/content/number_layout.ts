import styled from 'styled-components'

import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn('align-both')}
  margin-top: -50px;
`
export const Desc = styled.div`
  font-size: 18px;
  opacity: 0.8;
  padding: 0 10%;
  margin-bottom: 10px;
`

export const NumWrapper = styled.div`
  position: relative;
  margin-bottom: 15px;
  color: #139c9e;
`
export const Num = styled.div`
  font-size: 45px;
  font-weight: bold;
`
export const Unit = styled.div`
  position: absolute;
  font-size: 16px;
  font-weight: bold;
  opacity: 0.6;
  bottom: 14px;
  right: -22px;
`
