import styled from 'styled-components'

import { css, WIDTH } from '@/utils'
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
  max-width: ${WIDTH.COMMUNITY.CONTENT};
  height: 68px;
`
