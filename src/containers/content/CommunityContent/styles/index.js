import styled from 'styled-components'

import { theme, css, pixelAdd } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flex('justify-center')};
  min-height: 70vh;
  width: 100%;

  ${css.media.tablet`
    width: 100%;
    margin: 0;
    padding: .6em;
    padding-top: 0;
    padding-right: 0;
  `};
`
export const InnerWrapper = styled.div`
  /* margin: ${({ cardView }) => (cardView ? '0 2.5%' : '0 5.5%')}; */
  margin-top: 20px;
  width: 100%;
  max-width: ${pixelAdd(css.MAX_INNER_CONTENT_WIDTH, 36)};

  padding-left: 25px;
  padding-right: 0;
  margin-left: -18px;

  padding-top: ${({ cardView }) => (cardView ? '12px' : '15px')};
  color: ${theme('font')};
  background: ${theme('content.bg')};

  border: 1px solid;
  border-color: ${theme('content.border')};
  border-radius: 6px;

  ${css.media.laptopL`
    margin: 0 4.2%;
    margin-left: ${({ cardView }) => (cardView ? '2.5%' : '4.2%')};
    margin-top: 20px;
  `};

  ${css.media.mobile`
    margin: 0 3%;
    margin-left: 2%;
    margin-top: 0px;
    padding-top: 0;
  `};
`
