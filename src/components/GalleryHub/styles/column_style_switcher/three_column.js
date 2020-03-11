import styled from 'styled-components'

import { cs } from '@utils'
import { SwitchWrapper, SwitchBarBase } from './index'

export const Wrapper = styled(SwitchWrapper)`
  width: 21px;
`
export const BarRow = styled.div`
  ${cs.flex('justify-between')};
`
export const Bar = styled(SwitchBarBase)`
  width: 5px;
`
