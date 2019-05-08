import styled from 'styled-components'

import { theme, cs } from '@utils'

export const Wrapper = styled.div.attrs(props => ({
  'data-testid': props.testid,
}))`
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
  ${cs.media.tablet`
width: 100%;
margin: 0;
    margin-top: 10px;
    padding: .6em;
    padding-right: 0;
  `};
`

export const holder = 1
