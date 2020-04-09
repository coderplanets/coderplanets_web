import styled from 'styled-components'
// import { lighten } from 'polished'

// import { theme, cs } from '@utils'
import { cs } from '@utils'

import { Wrapper as BaseWrapper } from '../button'
import { OrSignBase } from './index'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
  position: relative;
`
export const LeftButton = styled(BaseWrapper)`
  width: 50%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`
export const OrSign = styled(OrSignBase)``
export const RightButton = styled(BaseWrapper)`
  width: 50%;
  background: #024250;
  border-color: #024250;
  color: #99b9bf;
  margin-left: 3px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`
