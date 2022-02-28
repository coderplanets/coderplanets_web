import styled from 'styled-components'

import type { TTestable } from '@/spec'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const BaseWrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
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
export const BaseInnerWrapper = styled.div`
  color: ${theme('font')};
  width: 100%;
  margin-top: 15px;
  padding-top: 0;

  ${css.media.mobile`
    margin: 0 3%;
    padding-top: 0;
  `};
`
export const BaseContentWrapper = styled.div`
  ${css.flexColumn()};
  width: 100%;
`
