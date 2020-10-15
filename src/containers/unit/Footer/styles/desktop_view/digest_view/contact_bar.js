import styled from 'styled-components'

import { css } from '@/utils'

import { getPadding } from '../../metrics'

export const Wrapper = styled.footer`
  ${css.flexColumn('align-center')};
  width: 100%;
`
export const InnerWrapper = styled.div`
  ${css.flex('align-center')};
  justify-content: ${({ mobile }) => (!mobile ? 'space-between' : 'center')};
  width: 100%;
  max-width: ${css.MAX_CONTENT_WIDTH};
  padding: ${({ layout }) => getPadding(layout)};
  height: 68px;
`
