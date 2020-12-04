import styled from 'styled-components'

import { css } from '@/utils'
import { getMarginLeft } from '../../metrics'

export const Wrapper = styled.footer`
  ${css.flexColumn('align-center')};
  width: 100%;
`
export const InnerWrapper = styled.div`
  ${css.flex('align-center')};
  justify-content: ${({ isMobile }) =>
    !isMobile ? 'space-between' : 'center'};
  width: 100%;
  height: 68px;
  margin-left: ${({ metric }) => getMarginLeft(metric)};
`
