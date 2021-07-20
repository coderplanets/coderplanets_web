import styled from 'styled-components'

import type { TTestable, TMetric } from '@/spec'
import { theme, css, WIDTH } from '@/utils'

type TWrapper = { metric: TMetric } & TTestable
export const Wrapper = styled.nav.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TWrapper>`
  ${css.flexColumn('justify-end')};
  position: relative;
  background: transparent;
  border-bottom: ${theme('banner.spliter')};
  min-height: 220px;
  margin-bottom: 15px;
  width: 100%;
  max-width: ${WIDTH.ARTICLE.PAGE};

  ${css.media.laptopL`
    min-height: 200px;
  `}
`
export const InnerWrapper = styled.div`
  ${css.flex('justify-center')};
  width: 100%;
`
export const BannerContent = styled.div`
  ${css.flex()};
  width: 100%;
`
