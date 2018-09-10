import styled from 'styled-components'

import { Img } from '../../../components'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  padding-top: 8px;
`

export const Icon = styled(Img)`
  fill: ${theme('header.fg')};
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 12px;
`

export const PannerWrapper = styled.div`
  width: 350px;
  min-height: 300px;
  height: auto;
  padding: 10px;
`
