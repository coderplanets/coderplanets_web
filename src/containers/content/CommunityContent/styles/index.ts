import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css, { theme, WIDTH } from '@/utils/css'
import { pixelAdd } from '@/utils/dom'

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

export const Wrapper = styled(BaseWrapper)`
  ${css.flexColumn('justify-start', 'align-center')};

  ${css.media.mobile`
    padding-left: 0;
  `};
`
export const MobileCardsWrapper = styled.div`
  ${css.flexColumn()};
  width: 100%;
  padding: 0;
  margin: 0;
`
export const InnerWrapper = styled(BaseInnerWrapper)`
  ${css.flexColumn()};

  max-width: ${pixelAdd(WIDTH.COMMUNITY.CONTENT, 46)};
  margin-left: ${WIDTH.COMMUNITY.CONTENT_OFFSET};

  /* 经典布局在统一宽度下再缩减 35px, 否则列表页会太宽 */
  padding-left: 35px;
  padding-right: 35px;

  ${css.media.mobile`
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 0;
    margin-right: 0;
  `};
`
export const ContentWrapper = styled(BaseContentWrapper)``
