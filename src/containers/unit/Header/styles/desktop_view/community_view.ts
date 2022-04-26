import styled from 'styled-components'

import type { TTestable, TMetric } from '@/spec'
import css, { theme, WIDTH } from '@/utils/css'
import { pixelAdd } from '@/utils/dom'

import HeaderSearchSVG from '@/icons/HeaderSearch'

type TPos = {
  noBorder: boolean
  leftOffset: string
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
  margin-left: ${({ leftOffset }) => leftOffset};
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

export const RouterWrapper = styled.div`
  ${css.flexGrow('align-center')};
  height: 100%;
`
export const HeaderSearchIcon = styled(HeaderSearchSVG).attrs(
  ({ testid }: TTestable) => ({
    'data-test-id': testid,
  }),
)<TTestable>`
  fill: ${theme('header.fg')};
  ${css.size(18)};
  display: block;
  cursor: pointer;
  margin-right: 12px;
`
export const Operations = styled.div`
  ${css.flex('align-center')};
`
export const Search = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  color: ${theme('header.fg')};
`
