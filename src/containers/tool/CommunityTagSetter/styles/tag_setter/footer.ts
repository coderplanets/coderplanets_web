import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-both')};
  height: 50px;
  width: 100%;
  border-top: 1px solid;
  border-top-color: #043b49;
  /* padding-left: 20px;
  padding-right: 18px; */
`
export const ApplyText = styled.div`
  font-size: 14px;
  color: ${theme('button.primary')};
  margin-right: 24px;
  margin-left: -20px;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`
