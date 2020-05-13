import styled from 'styled-components'

import { cs } from '@/utils'

import { SwitchWrapper, SwitchBarBase } from './gallery_base'

export const Wrapper = styled(SwitchWrapper)``

export const BarRow = styled.div`
  ${cs.flex('justify-between')};
`
export const Bar = styled(SwitchBarBase)`
  width: 8px;
`
