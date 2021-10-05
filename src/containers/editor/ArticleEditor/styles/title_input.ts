import styled from 'styled-components'

import css from '@/utils/css'
import { theme } from '@/utils/themes'

import Input from '@/components/Input'

export const Wrapper = styled.div`
  ${css.flexColumn('align-center')};
  width: 100%;
`
export const Inputer = styled(Input)`
  width: 660px;
  /* width: calc(100% - 20px); */
  color: ${theme('thread.articleTitle')};
  display: block;
  border-radius: 0;
  border: none;
  background: transparent;
  padding-left: 12px;
  padding-bottom: 5px;
  height: 50px;
  font-size: 24px;
  line-height: 1.6;
  /* font-size: 13px; */

  &:hover {
    border: none;
  }

  &:focus {
    border: none;
    box-shadow: none;
  }

  &::placeholder {
    font-size: 24px;
    color: ${theme('thread.articleTitle')};
    opacity: 0.6;
  }
`
