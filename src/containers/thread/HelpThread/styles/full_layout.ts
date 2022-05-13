import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import { MainWrapper } from './index'

export const Wrapper = styled.div`
  ${css.flex()};
  width: 100%;
  margin-top: 10px;
`
export const CatsWrapper = styled(MainWrapper)`
  ${css.flex()};
  flex-wrap: wrap;

  flex-grow: 1;
  width: 100%;
  min-height: 600px;
  margin-top: 8px;

  background: transparent;
  border-radius: 6px;
  padding-left: 22px;
  padding-right: 50px;

  border-right: 1px solid;
  border-right-color: ${theme('border')};
`
