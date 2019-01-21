import styled from 'styled-components'
import { theme } from 'utils'

// margin: -20px;
export const ContentContainer = styled.div`
  margin-top: -8px;
  margin-left: -6px;
  border-radius: 2px;
  background: ${theme('popover.bg')};
  border: 1px solid;
  border-top: 2px solid;
  border-color: ${theme('popover.borderColor')};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  position: relative;
`

export const holder = 1
