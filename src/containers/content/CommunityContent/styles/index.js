import styled from 'styled-components'

import { theme, cs } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-testid': props.testid,
}))`
  ${cs.flex('justify-center')};
  width: 88%;
  margin: 80px;
  margin-top: 22px;
  margin-bottom: 10px;
  min-height: 70vh;
  color: ${theme('font')};
  background: ${theme('content.bg')};
  border: 1px solid;
  border-color: ${theme('content.border')};
  border-radius: 6px;
  padding-top: 6px;

  ${cs.media.laptopL`
    width: 92%;
    margin: 50px;
    margin-top: 22px;
  `};

  ${cs.media.tablet`
    width: 100%;
    margin: 0;
    margin-top: 10px;
    padding: .6em;
    padding-right: 0;
  `};
`
export const InnerWrapper = styled.div`
  width: 100%;
  max-width: ${cs.MAX_CONTENT_WIDTH};
  padding: 0 3vw;

  ${cs.media.laptopL`
    padding-right: 2vw;
  `};
`
