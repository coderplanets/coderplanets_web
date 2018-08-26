import styled from 'styled-components'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

export const Divider = styled.div`
  border-left: 1px solid;
  border-color: ${theme('banner.desc')};
  opacity: 0.4;
`
