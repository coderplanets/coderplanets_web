import styled from 'styled-components'

import { theme, cs } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-testid': props.testid,
}))`
  ${cs.flex('justify-center')};
  min-height: 70vh;
  width: 100%;

  ${cs.media.tablet`
    width: 100%;
    margin: 0;
    margin-top: 10px;
    padding: .6em;
    padding-right: 0;
  `};
`
export const InnerWrapper = styled.div`
  margin: 0 5.5%;
  margin-top: 20px;
  width: 100%;

  padding: 0 3vw;
  color: ${theme('font')};
  background: ${theme('content.bg')};

  border: 1px solid;
  border-color: ${theme('content.border')};
  border-radius: 6px;

  ${cs.media.laptopL`
    margin: 0 4.2%;
    margin-top: 20px;
  `};
`
