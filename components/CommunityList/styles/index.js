import styled from 'styled-components'

import { cs } from 'utils'
import Img from '../../Img'

export const Wrapper = styled.div`
  ${cs.flex()};
`
export const Logo = styled(Img)`
  width: 24px;
  height: 24px;
  margin-left: 3px;
`
export const PopoverInfo = styled.div`
  padding: 5px 10px;
`
