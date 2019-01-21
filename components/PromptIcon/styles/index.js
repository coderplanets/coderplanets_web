import styled from 'styled-components'

import Img from '../../Img'
// import { theme } from 'utils'

export const Wrapper = styled.div``

export const PlanetDriverIcon = styled(Img)`
  transform: ${({ angle }) => angle};
  display: block;
`
