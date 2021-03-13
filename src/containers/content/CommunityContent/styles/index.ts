import styled from 'styled-components'

import { TTestable } from '@/spec'
import { theme, css, WIDTH, pixelAdd } from '@/utils'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
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
export const InnerWrapper = styled.div<{ cardView: boolean }>`
  margin-top: 20px;
  width: 100%;
  max-width: ${pixelAdd(WIDTH.COMMUNITY.CONTENT, 46)};
  margin-left: ${WIDTH.COMMUNITY.CONTENT_OFFSET};

  /* padding-left: 25px; */
  /* padding-right: 10px; */

  padding-top: ${({ cardView }) => (cardView ? '12px' : '0')};
  color: ${theme('font')};
  /* background: ${theme('content.bg')}; */

  /* border: 1px solid;
  border-color: ${theme('content.border')}; */
  /* border-radius: 6px; */

  ${css.media.mobile`
    margin: 0 3%;
    padding-top: 0;
  `};
`
