import styled from 'styled-components'

import HeaderSearchSVG from '../../../components/SvgIcons/HeaderSearchSVG'
import { theme, cs, MEDIA_MAX_WIDTH } from '../../../utils'

export const Wrapper = styled.header`
  ${cs.flex('justify-center')};
  background: ${({ fixed }) =>
    fixed ? theme('header.fixed') : theme('header.bg')};
  border-bottom: 1px solid;
  border-bottom-color: ${theme('header.spliter')};
  margin-left: ${({ leftOffset }) => leftOffset};
  box-shadow: ${theme('preview.shadow')};
`
export const InnerWrapper = styled.div`
  ${cs.flex()};
  max-width: ${MEDIA_MAX_WIDTH};
  width: 100%;
  height: 33px;
  align-items: center;
  padding: 0 5vw;
  transition: all 0.2s;
`

export const RouterWrapper = styled.div`
  ${cs.flexGrow()};
  height: 100%;
  margin-top: 1px;
`
export const HeaderSearchIcon = styled(HeaderSearchSVG)`
  fill: ${theme('header.fg')};
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 12px;
  margin-top: ${({ offsettop }) => offsettop || '0'};
`
export const Operations = styled.div`
  ${cs.flex('align-center')};
`
export const Search = styled.div`
  color: ${theme('header.fg')};
  padding-top: 8px;
`
export const AffixHeader = styled.div`
  display: ${({ fixed }) => (fixed ? 'block' : 'none')};
`
export const RawHeader = styled.div`
  display: ${({ fixed }) => (!fixed ? 'block' : 'none')};
`
