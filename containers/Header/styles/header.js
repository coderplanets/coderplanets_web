import styled from 'styled-components'

import Img from '../../../components/Img'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.header`
  height: 33px;
  ${cs.flex()};
  background: ${({ fixed }) =>
    fixed ? theme('header.fixed') : theme('header.bg')};

  border-bottom: 1px solid;
  border-bottom-color: ${theme('header.spliter')};
  align-items: center;
  padding: 0 4vw;
  padding-right: 5.5vw;
  margin-left: ${({ leftOffset }) => leftOffset};
  transition: all 0.2s;
  box-shadow: ${theme('preview.shadow')};
`
export const RouterWrapper = styled.div`
  ${cs.flexGrow()};
  height: 100%;
  margin-top: 1px;
`
export const HeaderIcon = styled(Img)`
  fill: ${theme('header.fg')};
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 12px;
  margin-top: ${({ offsetTop }) => offsetTop || '0'};
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
