import styled from 'styled-components'
// import { lighten } from 'polished'

// import { theme, cs } from '@utils'
import { cs } from '@utils'

import { Wrapper as BaseWrapper } from './button'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
`
export const LeftButton = styled(BaseWrapper)`
  position: relative;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`
export const OrSign = styled.div`
  position: absolute;
  top: 6px;
  right: -11px;
  font-size: 5px;
  font-weight: bold;
  color: #99b9bf;
  background: #002b35;
  border-radius: 100%;
  padding: 0 3px;
  z-index: 1;
`
export const RightButton = styled(BaseWrapper)`
  background: #024250;
  border-color: #024250;
  color: #99b9bf;
  margin-left: 3px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`
