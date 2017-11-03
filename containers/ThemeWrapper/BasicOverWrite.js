import styled from 'styled-components'
import { theme } from '../../utils/themes'

const BasicOverWrite = styled.div`
  *::-moz-selection {
    background-color: ${theme('selection_bg')};
  }

  *::selection {
    background-color: ${theme('selection_bg')};
  }

  a:hover {
    color: ${theme('a.hover')};
  }
  a:active {
    color: ${theme('a.active')};
  }
`

export default BasicOverWrite

/*
 *::selection {
   background-color: ${theme('selection_bg')};
   }

   ::-moz-selection {
   background-color: ${theme('selection_bg')};
   }

   ::-o-selection {
   background-color: ${theme('selection_bg')};
   }

   ::-ms-selection {
   background-color: ${theme('selection_bg')};
   }

 *::-webkit-selection {
   background-color: ${theme('selection_bg')};
   }
 */
