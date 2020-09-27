import styled from 'styled-components'

import { cs } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
  width: 100%;
`
export const Header = styled.div`
  ${cs.flex('align-center', 'justify-between')};
  margin-bottom: 12px;
`
export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: #004353;
  margin-top: 26px;
  margin-bottom: 26px;
  opacity: 0.6;
`
