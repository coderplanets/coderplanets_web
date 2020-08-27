import styled from 'styled-components'

import HeaderSearchSVG from '@/SvgIcons/HeaderSearchSVG'
import { theme, cs } from '@/utils'

import { getMaxWidth, getPadding } from './metric'

export const Wrapper = styled.header.attrs((props) => ({
  'data-testid': props.testId,
}))`
  z-index: 2;
  width: 100%;
  ${cs.flex('justify-center')};
  background: ${theme('header.bg')};
  opacity: 1;
  border-bottom: ${({ noBorder }) => (noBorder ? 'none' : '1px solid')};
  border-bottom-color: ${theme('header.spliter')};
  margin-left: ${({ leftOffset }) => leftOffset};
  box-shadow: ${({ noBorder }) =>
    noBorder ? 'none' : theme('preview.shadow')};
`
export const InnerWrapper = styled.div`
  ${cs.flex()};
  max-width: ${({ type }) => getMaxWidth(type)};
  padding: ${({ type, layout }) => getPadding(type, layout)};
  width: 100%;
  height: 33px;
  align-items: center;
  transition: all 0.2s;

  ${cs.media.mobile`padding-right: 0`};
`
export const RouterWrapper = styled.div`
  ${cs.flexGrow('align-center')};
  height: 100%;
`
export const HeaderSearchIcon = styled(HeaderSearchSVG).attrs((props) => ({
  'data-testid': props.testId,
}))`
  fill: ${theme('header.fg')};
  width: 20px;
  height: 20px;
  display: block;
  cursor: pointer;
  margin-right: 12px;
`
export const Operations = styled.div`
  ${cs.flex('align-center')};
`
export const Search = styled.div.attrs((props) => ({
  'data-testid': props.testId,
}))`
  color: ${theme('header.fg')};
`
