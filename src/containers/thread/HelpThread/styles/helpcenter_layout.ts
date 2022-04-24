import styled from 'styled-components'

import css from '@/utils/css'
import { MainWrapper } from './index'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  width: 100%;
  margin-top: 10px;
  padding-left: 22;
  border-right: none;
`
export const CatsWrapper = styled(MainWrapper)`
  ${css.flex()};
  flex-wrap: wrap;

  flex-grow: 1;
  width: 100%;
  min-height: 600px;

  border-radius: 6px;
  padding-right: 20px;
  margin-top: 5px;
  border-right: none;
`
