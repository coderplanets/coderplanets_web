import styled from 'styled-components'

import Input from '@/components/Input'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center', 'justify-between')};
  width: 100%;
  /* border: 1px solid tomato; */
  position: absolute;
  top: 18px;
  padding-left: 46px;
  padding-right: 13px;
  margin-top: 8px;
`
export const LinkWrapper = styled.div`
  width: 260px;
  margin-left: 15px;
`
export const LinkInput = styled(Input)`
  display: block;
  margin-top: -2px;
  border-radius: 0;
  border-top: none;
  border-left: none;
  border-right: none;
  color: #486368;
  padding: 2px 5px;
  height: 20px;
  font-size: 13px;

  &::placeholder {
    font-size: 12px;
  }
`
export const holder = 1
