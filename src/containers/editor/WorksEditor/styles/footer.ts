import styled from 'styled-components'

import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-both', 'justify-between')};
  width: 640px;
  border-top: 2px solid;
  border-top-color: #03343f;
  padding-top: 20px;
  padding-left: 35px;
  padding-right: 58px;
  margin-top: 35px;
  margin-bottom: 60px;
`

export const FirstStepWrapper = styled.div`
  margin-left: -30px;
  margin-top: 14px;
`
