import styled from 'styled-components'

import type { TTestable, TMetric } from '@/spec'
import css, { theme } from '@/utils/css'

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

export const InnerWrapper = styled.div<TInnerWrapper>`
  ${css.flex('align-center')};
  width: 100%;
  height: 33px;
  ${({ metric }) => css.fitContentWidth(metric)};
  padding-left: 0;
  padding-right: 0;
`
export const RouterWrapper = styled.div`
  ${css.flexGrow('align-center')};
  height: 100%;
`
