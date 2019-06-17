import styled from 'styled-components'
import Tippy from '@tippy.js/react'

// import Img from '@Img'
// import { theme } from '@utils'

export const Wrapper = styled(Tippy)`
  background: tomato;

  /* Styling the arrow for different placements */
  &[x-placement^='top'] {
    .tippy-arrow {
      border-top-color: tomato;
    }
  }
`

export const Title = styled.div``
