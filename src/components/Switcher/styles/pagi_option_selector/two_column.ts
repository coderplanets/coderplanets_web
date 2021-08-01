import styled from 'styled-components'

import css from '@/utils/css'

import { SwitchWrapper, SwitchBarBase } from './gallery_base'

export const Wrapper = styled(SwitchWrapper)``

export const BarRow = styled.div`
  ${css.flex('justify-between')};
`
export const Bar = styled(SwitchBarBase)`
  width: 8px;
`
