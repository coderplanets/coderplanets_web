import styled from 'styled-components'

import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flex('justify-between')};
  align-items: center;
  margin-right: 5px;
`

export const PayDesc = styled.div`
  ${cs.flex()};
  font-size: 0.8rem;
  color: ${theme('banner.desc')};
`
export const AliPay = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  color: #42abe1;
`
export const Weixin = styled.div`
  color: #3eb64b;
  margin-left: 5px;
`

export const MoneyNum = styled.span`
  color: #ffdad3;
`
