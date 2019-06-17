import styled from 'styled-components'
import Tippy from '@tippy.js/react'

// import Img from '@Img'
import { theme } from '@utils'

export const Wrapper = styled(Tippy)`
  background: ${theme('tooltip.bg')};
  color: ${theme('tooltip.text')};

  /* Styling the arrow for different placements */
  &[x-placement^='top'] {
    .tippy-arrow {
      border-top-color: ${theme('tooltip.bg')};
    }
  }
  &[x-placement^='bottom'] {
    .tippy-arrow {
      border-top-color: ${theme('tooltip.bg')};
    }
  }
  &[x-placement^='left'] {
    .tippy-arrow {
      border-top-color: ${theme('tooltip.bg')};
    }
  }
  &[x-placement^='right'] {
    .tippy-arrow {
      border-top-color: ${theme('tooltip.bg')};
    }
  }
`

export const Title = styled.div``
