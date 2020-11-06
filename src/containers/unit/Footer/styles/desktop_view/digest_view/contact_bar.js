import styled from 'styled-components'

import { css } from '@/utils'
// import { getPadding } from '../../metrics'

export const Wrapper = styled.footer`
  ${css.flexColumn('align-center')};
  width: 100%;
`
export const InnerWrapper = styled.div`
  ${css.flex('align-center')};
  justify-content: ${({ isMobile }) =>
    !isMobile ? 'space-between' : 'center'};
  width: 100%;
  max-width: ${css.MAX_INNER_CONTENT_WIDTH};
  height: 68px;
`
