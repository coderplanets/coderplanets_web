import styled from 'styled-components'

import { theme } from '../../../utils'

export const Wrapper = styled.div`
  width: 94%;
  margin: 40px;
  margin-top: 25px;
  margin-bottom: 10px;
  height: 70%;
  min-height: 70vh;
  color: ${theme('font')};
  background: ${theme('content.bg')};
  border-radius: 6px;
  padding: 1em 5em;
  @media (max-width: 1600px) {
    padding: 1em 3em;
  }
  @media (max-width: 1400px) {
    padding: 1em 2em;
    padding-bottom: 0;
  }
  @media (max-width: 1200px) {
    padding: 1em 1em;
    padding-bottom: 0;
  }
`

export const holder = 1
