import styled from 'styled-components'

// import Img from '@Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
`

export const ColorCell = styled.div`
  color: ${({ color }) => color || theme('banner.title')};
`
