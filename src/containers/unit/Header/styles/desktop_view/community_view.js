import styled from 'styled-components'

import { theme, css } from '@/utils'
import HeaderSearchSVG from '@/SvgIcons/HeaderSearchSVG'

import { getMaxWidth } from '../metric'

export const Wrapper = styled.header.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  width: 100%;
  ${css.flex('justify-center')};
  background: ${theme('header.bg')};
  opacity: 1;
  border-bottom: ${({ noBorder }) => (noBorder ? 'none' : '1px solid')};
  border-bottom-color: ${theme('header.spliter')};
  margin-left: ${({ leftOffset }) => leftOffset};
  box-shadow: ${({ noBorder }) => (noBorder ? 'none' : theme('drawer.shadow'))};
`
export const InnerWrapper = styled.div`
  ${css.flex('align-center')};
  max-width: ${({ metric }) => getMaxWidth(metric)};
  padding: 0 4px;
  width: 100%;
  height: 33px;
`
export const RouterWrapper = styled.div`
  ${css.flexGrow('align-center')};
  height: 100%;
`
export const HeaderSearchIcon = styled(HeaderSearchSVG).attrs((props) => ({
  'data-test-id': props.testId,
}))`
  fill: ${theme('header.fg')};
  width: 18px;
  height: 18px;
  display: block;
  cursor: pointer;
  margin-right: 12px;
`
export const Operations = styled.div`
  ${css.flex('align-center')};
`
export const Search = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  color: ${theme('header.fg')};
`
