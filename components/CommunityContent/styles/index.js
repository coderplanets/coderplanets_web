import styled from 'styled-components'

import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flex('justify-center')};
  width: 95%;
  margin: 40px;
  margin-top: 25px;
  margin-bottom: 10px;
  min-height: 70vh;
  color: ${theme('font')};
  background: ${theme('content.bg')};
  border: 1px solid;
  border-color: ${theme('content.border')};
  border-radius: 6px;
  padding: 1em;
`

export const holder = 1
