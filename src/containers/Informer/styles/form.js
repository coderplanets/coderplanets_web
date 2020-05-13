import styled from 'styled-components'

import { cs } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('justify.center')};

  width: 100%;
  padding: 20px;
`
export const Footer = styled.div`
  ${cs.flex('justify-center')};
  margin-top: 30px;
`
export const Submit = styled.div`
  padding: 0 30px;
`
export const Back = styled.div`
  padding: 0 10px;
`
