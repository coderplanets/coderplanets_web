import styled from 'styled-components'

import type { TTestable, TC11NLayout } from '@/spec'
import { C11N } from '@/constant'
import { theme, css, WIDTH, pixelAdd } from '@/utils'

type TWrapper = TTestable & { layout: TC11NLayout }

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TWrapper>`
  ${css.flex('justify-center')};

  flex-direction: ${({ layout }) => {
    return layout === C11N.CLASSIC ? 'column' : 'row'
  }};

  align-items: ${({ layout }) => {
    return layout === C11N.CLASSIC ? 'center' : 'flex-start'
  }};

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
export const InnerWrapper = styled.div<{ isClassicLayout: boolean }>`
  margin-top: 20px;
  width: 100%;

  /* max-width: ${pixelAdd(WIDTH.COMMUNITY.CONTENT, 46)}; */
  /* margin-left: ${WIDTH.COMMUNITY.CONTENT_OFFSET}; */

  max-width: ${({ isClassicLayout }) =>
    isClassicLayout
      ? pixelAdd(WIDTH.COMMUNITY.CONTENT, 46)
      : WIDTH.COMMUNITY.CONTENT};

  margin-left: ${({ isClassicLayout }) =>
    /* TODO: 10px when HolyGrailLayout, make it center in "human feel" */
    isClassicLayout ? WIDTH.COMMUNITY.CONTENT_OFFSET : '10px'};

  ${css.flex()};
  flex-direction: ${({ isClassicLayout }) =>
    isClassicLayout ? 'column' : 'row'};

  padding-top: 0;

  /* 经典布局在统一宽度下再缩减 35px, 否则列表页会太宽 */
  padding-left: ${({ isClassicLayout }) => (isClassicLayout ? '35px' : 0)};
  padding-right: ${({ isClassicLayout }) => (isClassicLayout ? '35px' : 0)};

  color: ${theme('font')};

  ${css.media.mobile`
    margin: 0 3%;
    padding-top: 0;
  `};
`
