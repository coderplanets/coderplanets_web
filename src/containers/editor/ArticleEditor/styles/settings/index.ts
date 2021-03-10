import styled from 'styled-components'

import { css } from '@/utils'

export const Wrapper = styled.div``
export const ContentWrapper = styled.div`
  min-height: 50vh;
  width: 100%;
  margin: 20px 0;
`
export const CheckItem = styled.div`
  margin-bottom: 10px;
`
export const Footer = styled.div`
  ${css.flex('align-center', 'justify-between')};
  width: 100%;
  border-top: 2px solid;
  border-top-color: #03343f;
  margin-top: 35px;
  margin-bottom: 40px;
  padding-top: 20px;
`
