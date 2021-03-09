import styled from 'styled-components'

import { theme, css } from '@/utils'
import HeaderSearchSVG from '@/SvgIcons/HeaderSearchSVG'

export const Wrapper = styled.header.attrs((props) => ({
  'data-test-id': props.testid,
}))`
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
export const InnerWrapper = styled.div`
  ${css.flex('align-center')};
  padding: 0 4px;
  width: 100%;
  height: 33px;
  ${({ metric }) => css.fitContentWidth(metric)};
`
export const RouterWrapper = styled.div`
  ${css.flexGrow('align-center')};
  height: 100%;
`
export const HeaderSearchIcon = styled(HeaderSearchSVG).attrs((props) => ({
  'data-test-id': props.testid,
}))`
  fill: ${theme('header.fg')};
  ${css.size(18)};
  display: block;
  cursor: pointer;
  margin-right: 12px;
`
export const Operations = styled.div`
  ${css.flex('align-center')};
`
export const Search = styled.div.attrs((props) => ({
  'data-test-id': props.testid,
}))`
  color: ${theme('header.fg')};
`
