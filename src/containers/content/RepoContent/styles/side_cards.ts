import styled from 'styled-components'

import { css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  min-width: 250px;
  ${css.media.tablet`display: none`};
`
export const ReportWrapper = styled.div`
  padding: 0 10px;
`
