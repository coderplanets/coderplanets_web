import styled from 'styled-components'

import { cs } from '@/utils'

import { getPadding } from '../metrics'

export const Wrapper = styled.footer`
  ${cs.flexColumn('align-center')};
  width: 100%;
`
export const InnerWrapper = styled.div`
  ${cs.flex('align-center')};
  justify-content: ${({ mobile }) => (!mobile ? 'space-between' : 'center')};
  width: 100%;
  max-width: ${cs.MAX_CONTENT_WIDTH};
  padding: ${({ layout }) => getPadding(layout)};
  height: 68px;
`
