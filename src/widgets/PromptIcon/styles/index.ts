import styled from 'styled-components'

import Img from '@/Img'

export const Wrapper = styled.div``

export const PlanetDriverIcon = styled(Img)<{ angle: string }>`
  transform: ${({ angle }) => angle};
  display: block;
`
