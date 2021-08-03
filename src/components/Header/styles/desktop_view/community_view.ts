import styled from 'styled-components'

import type { TTestable, TMetric } from '@/spec'
import { theme } from '@/utils/themes'
import css from '@/utils/css'
import { pixelAdd } from '@/utils/dom'
import { WIDTH } from '@/utils/css/metric'

type TPos = {
  noBorder: boolean
}

type IWrapper = TPos & TTestable

export const Wrapper = styled.header.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<IWrapper>`
  width: 100%;
  height: 33px;
  ${css.flex('justify-center')};
  background: ${theme('header.bg')};
  opacity: 1;
  border-bottom: ${({ noBorder }) => (noBorder ? 'none' : '1px solid')};
  border-bottom-color: ${theme('header.spliter')};
  box-shadow: ${({ noBorder }) => (noBorder ? 'none' : theme('drawer.shadow'))};
`

type TInnerWrapper = { metric: TMetric }
const InnerWrapper = styled.div<TInnerWrapper>`
  ${css.flex('align-center')};
  padding: 0 4px;
  width: 100%;
  height: 33px;
  ${({ metric }) => css.fitContentWidth(metric)};
`
export const ClassicInnerWrapper = styled(InnerWrapper)`
  padding-left: ${pixelAdd(WIDTH.COMMUNITY.CONTENT_OFFSET, 10)};
  padding-right: ${WIDTH.COMMUNITY.CONTENT_OFFSET};
`
export const HolyGrailInnerWrapper = styled(InnerWrapper)`
  padding-left: 0;
  padding-right: 0;

  margin-left: 18px;

  ${css.media.laptopM`
    margin-left: 30px;
    padding-right: 5px;
  `}
`

export const RouterWrapper = styled.div`
  ${css.flexGrow('align-center')};
  height: 100%;
`
