import styled from 'styled-components'

import { theme, cs } from 'utils'
import Img from 'Img'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
  justify-content: space-between;
  width: 100%;
  padding-left: 2px;
  letter-spacing: 4px;
`
export const PublishIcon = styled(Img)`
  fill: ${theme('button.fg')};
  width: 15px;
  height: 15px;
  display: block;
`
