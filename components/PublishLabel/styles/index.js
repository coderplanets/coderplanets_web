import styled from 'styled-components'

import Img from '../../Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 0 10px;
`
export const PublishIcon = styled(Img)`
  fill: ${theme('button.fg')};
  width: 15px;
  height: 15px;
  display: block;
`
