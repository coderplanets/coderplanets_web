import styled from 'styled-components'

export const Image = styled.img`
  position: ${({ loaded }) => (loaded ? 'relative' : 'absolute')};
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
  z-index: ${({ loaded }) => (loaded ? 1 : -1)};
`
export const holder = 1
