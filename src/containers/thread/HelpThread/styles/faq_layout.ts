import styled from 'styled-components'

import css from '@/utils/css'
import { MainWrapper } from './index'

export const Wrapper = styled(MainWrapper)`
  ${css.flexColumn()};
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  padding-left: 22px;
  border-right: none;
`
export const Holder = styled.div``
