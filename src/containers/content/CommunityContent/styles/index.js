import styled from 'styled-components'

import { theme, cs } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
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

  ${cs.media.mobile`
    margin-top: 0;
  `};
`
export const InnerWrapper = styled.div`
  margin: ${({ lessMargin }) => (lessMargin ? '0 2.5%' : '0 5.5%')};
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

  ${cs.media.mobile`
    margin: 0 4.2%;
    margin-top: 0;
  `};
`
export const TabBarWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid;
  border-bottom-color: #0c3d4e;
  margin-bottom: 10px;
  margin-left: -5px;
`
