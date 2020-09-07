import styled from 'styled-components'

import { cs, theme } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-center')};
  min-width: 250px;
  ${cs.media.tablet`display: none`};
`
export const ReportWrapper = styled.div`
  padding: 0 12px;
  align-self: flex-start;
`
export const Divider = styled.div`
  border-bottom: 1px solid;
  border-bottom-color: ${theme('drawer.sideDivider')};
  width: 91%;
`
